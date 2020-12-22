import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const Blog: NextPage = () => {
  return (
    <Flex direction="column" height="calc(100vh - 48px)" justify="center">
      <Heading textAlign="center">This is the blog page</Heading>
    </Flex>
  );
};

export default Blog;
