/* eslint-disable comma-dangle */
import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { PostsOrPages } from '@tryghost/content-api';

import api from 'services/api';

async function getPosts(): Promise<PostsOrPages> {
  const posts = await api.posts.browse({ order: 'created_at DESC' });
  return posts;
}

interface Props {
  posts: PostsOrPages;
}

const Home: NextPage<Props> = ({ posts }) => (
  <div>
    <Head>
      <title>Home page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Hello blog</h1>

    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <span>{post.created_at}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
