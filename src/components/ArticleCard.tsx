import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTag } from 'react-icons/fa';
import { Icon } from '@chakra-ui/icons';

// Components
import Tag from 'components/Tag';

// Services
import api from 'services/api';

// Utils
import { dayjs } from 'utils/date';

interface Props {
  title: string;
  readingTime: number;
  featureImage?: string;
  publishedAt: string;
}

const ArticleCard: React.FC<Props> = ({ title, featureImage, publishedAt }) => {
  const boxShadow = useColorModeValue('0px 2px 4px rgba(0, 0, 0, 0.1)', 'none');
  const borderColor = useColorModeValue('gray.200', 'transparent');
  const articleBackgroundColor = useColorModeValue('inherit', 'darkGray.500');
  const tagIconBgColor = useColorModeValue('gray.800', 'gray.400');

  const formattedDate = useMemo(
    () => dayjs(publishedAt).format('DD [de] MMMM [de] YYYY'),
    [publishedAt]
  );

  return (
    <Flex
      as="div"
      backgroundColor={articleBackgroundColor}
      position="relative"
      padding={4}
      borderRadius="sm"
      boxShadow={boxShadow}
      borderWidth="1px"
      borderColor={borderColor}
      transform="scale(1)"
      transition="transform 0.3s ease-in-out"
      _before={{
        borderWidth: '1px 0 1px 0',
        transform: 'scaleX(0)',
        content: '""',
        position: 'absolute',
        transition: 'all 0.3s ease-in-out',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderRadius: 'sm',
        borderColor: 'pink.500',
      }}
      _after={{
        borderWidth: '0 1px 0 1px',
        transform: 'scaleY(0)',
        content: '""',
        position: 'absolute',
        transition: 'all 0.3s ease-in-out',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderRadius: 'sm',
        borderColor: 'pink.500',
      }}
      _hover={{
        borderColor: 'transparent',
        transform: 'scale(1.02)',
        transition: 'all 0.3s ease-in-out',
        _before: {
          transform: 'scale(1, 1)',
        },
        _after: {
          transform: 'scale(1, 1)',
        },
      }}
    >
      <Flex direction="column" flex="1">
        <Heading as="h3" fontSize={['md', 'xl']} fontWeight={600}>
          {title}
        </Heading>
        <Text
          fontSize="2md"
          fontWeight="thin"
          lineHeight="22px"
          minHeight="60px"
        >
          Hey yo, give me a dollar
        </Text>

        <HStack spacing={2} alignItems="center" marginTop={4}>
          <Icon as={FaTag} width={3} height={3} color={tagIconBgColor} />
          <Tag>nodejs</Tag>
        </HStack>
        <Text fontSize="xs" fontWeight="thin" as="p">
          {formattedDate} - Leitura de 1 minuto
        </Text>
      </Flex>

      <Box display={['none', 'block']}>
        <Image
          alt="Mountains"
          src={featureImage}
          width={180}
          height={150}
          quality={100}
          objectFit="cover"
        />
      </Box>
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

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);

  const posts = await api.posts.browse({ order: 'created_at DESC', limit: 2 });

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default ArticleCard;
