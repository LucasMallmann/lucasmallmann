import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';

import { Box, Divider } from '@chakra-ui/react';
import { PostOrPage, PostsOrPages } from '@tryghost/content-api';

import api from 'services/api';
import Spotlight from 'components/Spotlight';

interface Props {
  posts: PostsOrPages;
  spotlightPost: PostOrPage;
}

const Home: NextPage<Props> = ({ spotlightPost }) => {
  return (
    <Box direction="column" padding={[0, 2, 2, 0]}>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box maxWidth="4xl" marginY={4} marginX="auto" flex={1} paddingTop={8}>
        <Spotlight post={spotlightPost} />

        <Divider
          marginTop={8}
          height="1px"
          backgroundColor="gray.700"
          maxWidth={['90%', 'full']}
          marginX="auto"
        />
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await api.posts.browse({
    order: 'created_at DESC',
    limit: 10,
    include: 'tags',
  });

  return {
    props: {
      posts,
      spotlightPost: posts[1],
    },
  };
};

export default Home;
