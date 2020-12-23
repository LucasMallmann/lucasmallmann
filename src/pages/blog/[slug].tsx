import React, { useRef } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { PostOrPage } from '@tryghost/content-api';
// import useVisibilitySensor from '@rooks/use-visibility-sensor';
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

// Services
import api from 'services/api';

// Components
import PostAuthor from 'components/PostAuthor';

const SocialMediaShare = dynamic(() => import('components/SocialMediaShare'), {
  ssr: false,
});
interface Props {
  post: PostOrPage;
}

const Post: NextPage<Props> = ({ post }) => {
  const $postIntroductionNode = useRef<HTMLDivElement>();

  const postStyles = useStyleConfig('ArticlePost', {});

  // const { isVisible, visibilityRect } = useVisibilitySensor(
  //   $postIntroductioNode,
  //   {
  //     intervalCheck: false,
  //     scrollCheck: true,
  //     resizeCheck: true,
  //   }
  // );

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Box
        marginTop={32}
        width={['full', 'full', '4xl']}
        marginX="auto"
        flex={1}
        // position="relative"
      >
        <Box
          as="div"
          maxWidth="2xl"
          marginX="auto"
          paddingX={[4, 0]}
          ref={$postIntroductionNode}
        >
          <HStack spacing={2}>
            {post.tags.map((tag) => (
              <NextLink href="/" key={tag.id}>
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
                    textTransform="uppercase"
                    fontFamily="sans-serif"
                    fontSize="12px"
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
          <Heading as="h1" fontSize={['4xl', '52px']}>
            {post.title}
          </Heading>
          <Text as="p" fontSize="xl" marginTop={5} lineHeight="tall">
            {post.excerpt}
          </Text>

          <Box marginTop={4}>
            <SocialMediaShare />
          </Box>

          <Divider
            marginTop={8}
            marginBottom={4}
            height="1px"
            backgroundColor="gray.700"
            marginX="auto"
          />

          <PostAuthor post={post} />
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
        <Box
          width={['full', 'full', '2xl']}
          marginTop={8}
          marginX="auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
          sx={postStyles}
        />
      </Box>
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
