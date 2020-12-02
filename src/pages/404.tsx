import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  return (
    <Flex direction="column" height="calc(100vh - 48px)" justify="center">
      <Heading textAlign="center">This page was not found</Heading>
    </Flex>
  );
};

export default NotFound;
