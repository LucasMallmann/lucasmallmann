import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Divider, Grid, Heading, Link } from '@chakra-ui/react';
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
    <div className="flex-col p-0 sm:p-2 lg:p-0">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl flex-1 m-auto pt-0 md:pt-8">
        <Spotlight post={spotlightPost} />

        <hr className="mt-8 border-gray-700 dark:border-gray-750 h-px w-11/12 md:w-4/5 mx-auto" />

        <h2 className="text-center mt-8 text-3xl md:text-4xl font-semibold">
          Todos os artigos
        </h2>

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
      </div>
    </div>
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
