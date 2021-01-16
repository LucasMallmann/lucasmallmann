import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { getAllFilesFrontMatter } from 'lib/mdx';

const Blog: NextPage = () => {
  return (
    <div className="flex-col">
      <h1 className="text-center">Blog page</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter({ type: 'blog' });

  console.log(posts);

  return { props: { posts } };
};

export default Blog;
