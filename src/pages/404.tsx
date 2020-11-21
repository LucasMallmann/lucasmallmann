import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  return (
    <Flex height="100vh" width="100vw" justify="center" align="center">
      <Heading>This page was not found</Heading>
    </Flex>
  );
};

export default NotFound;
