import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Hello blog</h1>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts();

  return {
    props: {},
  };
};

export default Home;
