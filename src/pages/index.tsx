import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { Heading, PseudoBox } from '@chakra-ui/core';
import { PostsOrPages } from '@tryghost/content-api';

import api from 'services/api';

async function getPosts(): Promise<PostsOrPages> {
  const posts = await api.posts.browse({ order: 'created_at DESC' });
  return posts;
}

interface Props {
  posts: PostsOrPages;
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading size="md">Hello blog</Heading>
      <PseudoBox
        marginY={4}
        marginX="auto"
        backgroundColor="purple.500"
        width="50%"
        paddingX={2}
        paddingY={2}
        transition="all 0.3s ease-in-out"
        borderRadius="sm"
        _hover={{
          transform: 'scale(1.2)',
        }}
      >
        Tomato
      </PseudoBox>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
