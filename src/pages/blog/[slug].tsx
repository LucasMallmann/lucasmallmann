import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { MdKeyboardBackspace } from 'react-icons/md';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Link,
} from '@chakra-ui/react';

import Tag from 'components/Tag';
import Author from 'components/Author';

const Post: NextPage = () => {
  const router = useRouter();

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

      <Box marginTop="25vh">
        <Button
          onClick={() => router.back()}
          variant="link"
          color="pink.500"
          position="relative"
          fontWeight="semi-bold"
          marginTop={[2, 8]}
          _before={{
            content: '""',
            position: 'absolute',
            width: '100%',
            marginTop: '10px',
            height: '2px',
            bottom: '-2px',
            backgroundColor: 'pink.500',
            visibility: 'hidden',
            transform: 'scaleX(0)',
            transition: 'all 0.3s ease-in-out',
          }}
          _hover={{
            _before: {
              visibility: 'visible',
              transform: 'scaleX(1)',
            },
          }}
          _active={{
            color: 'pink.500',
            transform: 'scaleX(0.9)',
          }}
        >
          <HStack>
            <Icon as={MdKeyboardBackspace} />
            <Text fontSize="md">Voltar</Text>
          </HStack>
        </Button>

        <Text
          marginTop={3}
          fontWeight="thin"
          fontSize="15px"
          letterSpacing="wider"
          fontSizes={['xs', 'md']}
        >
          20 de maio de 2020 - Leitura de 2 minutos
        </Text>

        <Heading
          as="h1"
          fontSize={['3xl', '4xl']}
          letterSpacing="wide"
          fontWeight="semi-bold"
          marginTop={4}
        >
          Another day another dollar with some money
        </Heading>

        <Text
          marginTop={1}
          fontWeight="thin"
          fontSize="15px"
          letterSpacing="wider"
        >
          Super cool way of living
        </Text>

        <HStack spacing={4} marginTop={6}>
          <NextLink href="/">
            <Link href="/" _hover={{ textDecoration: 'none', opacity: 0.8 }}>
              <Tag>nodejs</Tag>
            </Link>
          </NextLink>

          <NextLink href="/">
            <Link href="/" _hover={{ textDecoration: 'none', opacity: 0.8 }}>
              <Tag>nodejs</Tag>
            </Link>
          </NextLink>
        </HStack>
      </Box>

      <Author />
    </Flex>
  );
};

export default Post;
