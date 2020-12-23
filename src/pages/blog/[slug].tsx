import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { PostOrPage } from '@tryghost/content-api';
import {
  Box,
  Heading,
  HStack,
  Text,
  Tag,
  Link,
  useStyleConfig,
  Divider,
} from '@chakra-ui/react';

// Utils
import { dayjs } from 'utils/date';

// Services
import api from 'services/api';

// Components
const SocialMediaShare = dynamic(() => import('components/SocialMediaShare'), {
  ssr: false,
});
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
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Box
        marginTop={20}
        width={['full', 'full', '4xl']}
        marginX="auto"
        flex={1}
      >
        <Box maxWidth="2xl" marginX="auto" paddingX={[4, 0]}>
          <HStack spacing={2}>
            {post.tags.map((tag) => (
              <NextLink href="/">
                <Link
                  href="/"
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <Tag
                    size="md"
                    key={tag.id}
                    variant="solid"
                    backgroundColor="red.400"
                    fontWeight="bold"
                    borderRadius="sm"
                    color="white"
                    transition="background-color 0.2s ease-in-out"
                    _hover={{
                      backgroundColor: 'red.500',
                    }}
                  >
                    {tag.name}
                  </Tag>
                </Link>
              </NextLink>
            ))}
          </HStack>
          <Heading as="h1" fontSize={['4xl', '5xl']}>
            {post.title}
          </Heading>
          <Text as="p" fontSize="xl" marginTop={5} lineHeight="tall">
            {post.excerpt}
          </Text>

          <Box marginTop={4}>
            <SocialMediaShare />
          </Box>

          <Divider
            marginY={4}
            height="1px"
            backgroundColor="gray.700"
            marginX="auto"
          />
        </Box>

        <Box
          position="relative"
          width="full"
          height={[64, '520px']}
          marginTop={8}
        >
          <Image
            alt="Mountains"
            src={post.feature_image}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>

      {/* <Box
        marginTop={8}
        dangerouslySetInnerHTML={{ __html: post.html }}
        sx={postStyles}
      /> */}
    </>
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
