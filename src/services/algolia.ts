import algoliasearch from 'algoliasearch';

export const searchClient = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ALGOLIA_API_KEY
);

export const adminClient = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);
