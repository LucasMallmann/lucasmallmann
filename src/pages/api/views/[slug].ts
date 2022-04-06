import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { connectToDatabase } from 'lib/mongo';

const handler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  },
  onError(error: Error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry, something went wrong. ${error.message}` });
  },
});

export default handler
  .get(async (req, res) => {
    const { slug } = req.query;

    if (!slug) {
      return res
        .status(400)
        .json({ error: 'You did not inform the slug as a query param.' });
    }

    const { client, db } = await connectToDatabase();

    if (!client) {
      return res
        .status(500)
        .json({ error: 'Could not connect to the database.' });
    }

    const pageViewBySlug = await db.collection('pageviews').findOne({ slug });

    const total = pageViewBySlug ? pageViewBySlug.total : 0;

    return res.status(200).json({ total });
  })
  .post(async (req, res) => {
    const { slug } = req.query;

    const { client, db } = await connectToDatabase();

    if (!client) {
      return res
        .status(500)
        .json({ error: 'Could not connect to the database.' });
    }

    const pageViewBySlug = await db.collection('pageviews').findOne({ slug });

    let total = 0;

    if (pageViewBySlug) {
      total = pageViewBySlug.total + 1;
      await db.collection('pageviews').updateOne({ slug }, { $set: { total } });
    } else {
      total = 1;
      await db.collection('pageviews').insertOne({ slug, total });
    }

    return res.status(200).json({ total });
  });
