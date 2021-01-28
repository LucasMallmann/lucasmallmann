const title = 'Lucas Mallmann – Developer, escritor, criador.';

const description = 'Fullstack Developer e um entusiasta Javascript.';

const SEO = {
  title,
  description,
  canonical: 'https://personal-blog-coral.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://personal-blog-coral.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://personal-blog-coral.vercel.app/static/images/banner.jpg',
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
