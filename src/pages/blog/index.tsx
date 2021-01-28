import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

/**
 * Services
 */
import { getAllFilesFrontMatter } from 'lib/mdx';

const title = 'Lucas Mallmann – Blog';
const url = 'https://personal-blog-coral.vercel.app/blog';
const description =
  'Ideias sobre tecnologia, desenvolvimento de software, carreira e reflexões sobre a vida.';

const Blog: NextPage = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex-col">
        <h1 className="text-center">Blog page</h1>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter({ type: 'blog' });
  return { props: { posts } };
};

export default Blog;
