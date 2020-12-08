import React, { useMemo } from 'react';
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

// Utils
import { dayjs } from 'utils/date';
import { PostOrPage } from '@tryghost/content-api';

interface Props {
  post: PostOrPage;
}

const ArticleCard: React.FC<Props> = ({ post }) => {
  const boxShadow = useColorModeValue('0px 2px 4px rgba(0, 0, 0, 0.1)', 'none');
  const borderColor = useColorModeValue('gray.200', 'transparent');
  const articleBackgroundColor = useColorModeValue('inherit', 'darkGray.500');
  const tagIconBgColor = useColorModeValue('gray.800', 'gray.400');

  const formattedDate = useMemo(
    () => dayjs(post.published_at).format('DD [de] MMMM [de] YYYY'),
    [post.published_at]
  );

  const formattedReadingTime = useMemo(() => {
    return post.reading_time <= 1
      ? `Leitura de ${post.reading_time} minuto`
      : `Leitura de ${post.reading_time} minutos`;
  }, [post.reading_time]);

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
          {post.title}
        </Heading>
        <Text
          fontSize="2md"
          fontWeight="thin"
          lineHeight="22px"
          minHeight="60px"
        >
          {post.excerpt}
        </Text>

        {post.tags && (
          <HStack spacing={2} alignItems="center" marginTop={4}>
            <Icon as={FaTag} width={3} height={3} color={tagIconBgColor} />

            {post.tags.map((tag) => (
              <Tag key={tag.id}>{tag.name}</Tag>
            ))}
          </HStack>
        )}

        <Text fontSize="xs" fontWeight="thin" as="p" marginTop={4}>
          {formattedDate} - {formattedReadingTime}
        </Text>
      </Flex>

      <Box display={['none', 'block']}>
        <Image
          alt="Mountains"
          src={post.feature_image}
          width={180}
          height={150}
          quality={100}
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default ArticleCard;
