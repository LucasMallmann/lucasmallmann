import { NextApiRequest, NextApiResponse } from 'next';

import { adminClient } from 'services/algolia';

const algoliaHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const index = adminClient.initIndex('prod_POST');

  // console.log(index);

  const objects = [
    {
      firstname: 'Jimmie',
      lastname: 'Barninger',
      objectID: 'myID1',
    },
  ];

  index.saveObjects(objects).then((response) => console.log(response));

  // const product = await index.saveObject({
  //   objectID: 'myId',
  //   name: 'Sneakers',
  //   price: 1000,
  // });

  res.send('product');
};

export default algoliaHandler;
