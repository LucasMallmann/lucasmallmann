import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';
import { PostOrPage } from '@tryghost/content-api';

// Styles
// import postStyles from 'styles/post.module.scss';

import api from 'services/api';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Link,
  useStyleConfig,
} from '@chakra-ui/react';

import Tag from 'components/Tag';
// import Author from 'components/Author';

import { dayjs } from 'utils/date';

interface Props {
  post: PostOrPage;
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  const postStyles = useStyleConfig('ArticlePost', {});

  const formattedDate = useMemo(() => {
    return dayjs(post.published_at).format('DD [de] MMMM [de] YYYY');
  }, [post.published_at]);

  const formattedReadingTime = useMemo(() => {
    return post.reading_time <= 1
      ? `Leitura de ${post.reading_time} minuto`
      : `Leitura de ${post.reading_time} minutos`;
  }, [post.reading_time]);

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
          src={post.feature_image}
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
          letterSpacing={['normal', 'wider']}
          fontSize={['15px', 'md']}
        >
          {formattedDate} - {formattedReadingTime}
        </Text>

        <Heading
          as="h1"
          fontSize={['4xl', '5xl']}
          letterSpacing="wide"
          fontWeight="semi-bold"
          marginTop={4}
        >
          {post.title}
        </Heading>

        <Text
          marginTop={1}
          fontWeight="thin"
          fontSize="15px"
          letterSpacing="wider"
        >
          {post.excerpt}
        </Text>

        {post.tags && (
          <HStack spacing={4} marginTop={6}>
            {post.tags.map((tag) => (
              <NextLink href="/" key={tag.id}>
                <Link
                  href="/"
                  _hover={{ textDecoration: 'none', opacity: 0.8 }}
                >
                  <Tag>{tag.name}</Tag>
                </Link>
              </NextLink>
            ))}
          </HStack>
        )}
      </Box>

      <Box
        marginTop={8}
        dangerouslySetInnerHTML={{ __html: post.html }}
        sx={postStyles}
      />

      {/* <Author /> */}
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await api.posts.browse();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  const { slug } = params;

  const post = await api.posts.read({ slug }, { include: 'tags' });

  return {
    props: {
      post,
    },
  };
};

export default Post;
