import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import type { FrontMatterData } from 'lib/mdx';

interface Props extends FrontMatterData {
  url: string;
}

const BlogSEO: React.FC<Props> = ({
  title,
  summary,
  publishedAt,
  image,
  url,
}) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://leerob.io${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Lee Robinson`}
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
        authorName="Lee Robinson"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[image]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Lee Robinson"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSEO;
