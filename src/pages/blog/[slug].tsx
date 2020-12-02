import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
// import NextLink from 'next/link';

import { Box, Flex, HStack, Icon } from '@chakra-ui/react';

const Post: NextPage = () => {
  return (
    <Flex direction="column" padding={[3, 4, 0, 0]}>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        height="25vh"
        width="100vw"
        position="absolute"
        left={0}
        top={0}
        _after={{
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          zIndex: 2,
        }}
      >
        <Image
          src="/marvin.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
    </Flex>
  );
};

export default Post;
