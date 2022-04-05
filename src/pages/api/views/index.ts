import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { connectToDatabase } from 'lib/mongo';

const handler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  },
  onError(error: Error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry, something went wrong. ${error.message}.` });
  },
});

interface PageView {
  _id: ObjectId;
  slug: string;
  total: number;
}

export default handler.get(async (req, res) => {
  const { client, db } = await connectToDatabase();

  if (!client) {
    return res
      .status(500)
      .json({ error: 'Could not connect to the database.' });
  }

  const pageViews = (await db
    .collection('pageviews')
    .find({})
    .toArray()) as PageView[];

  const total = pageViews.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );

  return res.status(200).json({ total });
});
