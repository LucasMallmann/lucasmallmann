const title = 'Lucas Mallmann – Developer, writer, creator.';

const description = 'Fullstack Developer based in Brazil.';

const SEO = {
  title,
  description,
  canonical: 'https://lucasmallmann.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://lucasmallmann.dev',
    title,
    description,
    images: [
      {
        url: 'https://lucasmallmann.dev/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@lucasmallmann76',
    site: '@lucasmallmann76',
    cardType: 'summary_large_image',
  },
};

export default SEO;
