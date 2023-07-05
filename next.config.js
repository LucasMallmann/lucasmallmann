const { withContentlayer } = require('next-contentlayer');
const nextTranslate = require('next-translate-plugin');

/**
 * @type {import('next').NextConfig}
 */
module.exports = nextTranslate(
  withContentlayer({
    images: {
      domains: ['static.ghost.org', 'images.unsplash.com'],
    },
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      MONGODB_DB: process.env.MONGODB_DB,
    },
    i18n: {
      locales: ['en', 'pt-BR'],
      defaultLocale: 'en',
    },
  })
);
