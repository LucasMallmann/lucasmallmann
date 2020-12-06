import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';

import { Box, Flex, Heading, Text, Link, VStack } from '@chakra-ui/react';
import { PostsOrPages } from '@tryghost/content-api';

import api from 'services/api';

import ArticleCard from 'components/ArticleCard';

interface Props {
  posts: PostsOrPages;
}

const PARAGRAPH_MARGIN = 4;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Flex direction="column" padding={[3, 4, 0, 0]}>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" alignItems="center">
        <Heading
          as="h1"
          fontSize={['3xl', '3xl', '4xl', '5xl']}
          letterSpacing="wide"
          fontWeight={600}
          marginTop={[-2, 2, 9, 9]}
          textAlign="center"
        >
          Lucas Mallmann
        </Heading>
        <Text
          color="pink.500"
          fontStyle="italic"
          fontSize={['md', 'md', 'xl']}
          fontWeight="semi-bold"
          marginTop={[2, 4]}
          textAlign="center"
        >
          Ensinando as pessoas a se apaixonarem cada vez mais por tecnologia!
        </Text>
      </Flex>

      <Box marginTop={[4, 4, 9, 9]}>
        <Heading as="h1" fontSize={['2xl', '3xl', '4xl']} fontWeight="normal">
          Quem sou eu?
        </Heading>

        <Text
          as="p"
          marginY={PARAGRAPH_MARGIN}
          lineHeight={6}
          fontSize={['15px', 16]}
        >
          Olá, seja muito bem vindo(a) ao meu blog! Meu nome é Lucas Mallmann.
          Trabalho como engenheiro de software desde 2017. Acredito que a
          educação, a divulgação de conhecimento e de boas ideias é o caminho
          mais rápido e eficaz para melhorar o mundo!
        </Text>

        <Text
          as="p"
          marginY={PARAGRAPH_MARGIN}
          lineHeight={6}
          fontSize={['15px', 16]}
        >
          Atualmente trabalho como Software Enginner na{' '}
          <Link
            href="https://pling.net.br"
            isExternal
            color="pink.500"
            fontWeight="600"
            _hover={{
              textDecoration: 'none',
              opacity: 0.8,
            }}
          >
            Pling
          </Link>
          , como foco principalmente em front-end e na construção de Progressive
          Web Apps (PWA). Comecei a programar no ano de 2016, e meu interesse no
          mundo do desenvolvimento só aumenta a cada dia! Procuro sempre
          aprender e aplicar novas tecnologias, sendo esse um dos motivos pelo
          qual eu construí esse blog, pois acredito que a melhor forma de
          aprender seja ensinar.
        </Text>

        <Text
          as="p"
          marginY={PARAGRAPH_MARGIN}
          lineHeight={6}
          fontSize={['15px', 16]}
        >
          Gosto muito de música, apaixonado por games, um aventureiro na
          culinária, e nos tempos livres adoro filosofar sobre a vida. Apesar de
          ser um blog voltado para tecnologia, não se surpreenda se trouxermos
          algumas reflexões por aqui.
        </Text>

        <Text
          as="p"
          marginY={PARAGRAPH_MARGIN}
          lineHeight={6}
          fontSize={['15px', 16]}
        >
          Muitos sonhos e objetivos meus nasceram de recursos online que eu
          encontrei sobre tecnologia. Acredito que seja o meu dever, e eu
          ficarei extremamente feliz se conseguir retribuir pra vocês um pouco
          desse aprendizado e do que me trouxe até aqui! #keepgoing.
        </Text>
      </Box>

      <Heading
        fontWeight="normal"
        fontSize={['2xl', '3xl', '4xl']}
        marginTop={4}
      >
        Artigos recentes
      </Heading>

      <VStack marginTop={6} spacing={4}>
        {posts.map((post) => (
          <NextLink href={`/blog/${post.slug}`} key={post.uuid}>
            <Link
              href={`/blog/${post.slug}`}
              _hover={{
                textDecoration: 'none',
              }}
              display="block"
              width="100%"
            >
              <ArticleCard
                title={post.title}
                readingTime={post.reading_time}
                featureImage={post.feature_image}
                publishedAt={post.published_at}
              />
            </Link>
          </NextLink>
        ))}
      </VStack>

      <NextLink href="/">
        <Box marginTop={4} marginBottom={16}>
          <Link
            href="/"
            color="pink.500"
            position="relative"
            fontWeight="semi-bold"
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
          >
            Ver todos os posts
          </Link>
        </Box>
      </NextLink>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await api.posts.browse({
    order: 'created_at DESC',
    // limit: 2,
    include: 'tags',
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
