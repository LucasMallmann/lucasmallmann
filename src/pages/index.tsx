import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Divider, Grid, Heading, Link } from '@chakra-ui/react';
import { PostOrPage, PostsOrPages } from '@tryghost/content-api';

import api from 'services/api';

import Spotlight from 'components/Spotlight';
import ArticleCard from 'components/ArticleCard';

interface Props {
  posts: PostsOrPages;
  spotlightPost: PostOrPage;
}

const Home: NextPage<Props> = ({ spotlightPost, posts }) => {
  return (
    <Box direction="column" padding={[0, 2, 2, 0]} marginTop="70px">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        maxWidth="4xl"
        marginY={4}
        marginX="auto"
        flex={1}
        paddingTop={[0, 8]}
      >
        <Spotlight post={spotlightPost} />

        <Divider
          marginTop={8}
          height="1px"
          backgroundColor="gray.700"
          maxWidth={['90%', '80%']}
          marginX="auto"
        />

        <Heading as="h2" textAlign="center" marginTop={8}>
          Todos os artigos
        </Heading>

        <Grid
          templateColumns={['1fr', '1fr 1fr']}
          gap={6}
          width={['full', '75%']}
          marginX="auto"
          marginTop={8}
          paddingX={[2, 0]}
        >
          {posts.map((post) => (
            <NextLink href={`/blog/${post.slug}`} key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                _hover={{ textDecoration: 'none' }}
              >
                <ArticleCard post={post} />
              </Link>
            </NextLink>
          ))}
        </Grid>
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
