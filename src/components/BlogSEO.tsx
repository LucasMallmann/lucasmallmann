import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import type { FrontMatterData } from 'lib/mdx';

interface Props extends FrontMatterData {
  url: string;
}

const BlogSEO = ({
  title,
  summary,
  publishedAt,
  image,
  url,
}: Props): React.ReactNode => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://personal-blog-coral.vercel.app${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Lucas Mallmann`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Lucas Mallmann"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[image]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Lucas Mallmann"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSEO;
