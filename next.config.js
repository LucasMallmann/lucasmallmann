const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  images: {
    domains: ['static.ghost.org', 'images.unsplash.com'],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB,
  },
});
