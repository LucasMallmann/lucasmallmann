import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Hello blog</h1>
  </div>
);

export default Home;
