import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { findResultsState } from 'react-instantsearch-dom/server';

import SearchApp from 'components/SearchApp';

import { pathToSearchState } from 'utils/algolia';
import { searchClient } from 'services/algolia';

const debounceTime = 700;

const Blog: NextPage = () => {
  const router = useRouter();

  return (
    <Flex direction="column" height="calc(100vh - 48px)" justify="center">
      <Heading textAlign="center">This is the blog page</Heading>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const searchState = pathToSearchState(req.url);

  console.log('search state is ', searchState);

  const results = await findResultsState(SearchApp, {
    searchClient,
    indexName: 'prod_POST',
  });

  console.log(results);

  return {
    props: {
      a: 'b',
    },
  };
};

export default Blog;
