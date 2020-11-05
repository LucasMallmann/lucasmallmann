import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.CONTENT_API_KEY,
  version: 'v3',
});

export default api;
