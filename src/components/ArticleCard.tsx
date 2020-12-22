import React, { useMemo } from 'react';
import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';

// Utils
import { dayjs } from 'utils/date';

interface Props {
  post: PostOrPage;
}

const ArticleCard: React.FC<Props> = ({ post }) => {
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
    <Flex direction="column" width="100%" alignItems="center" marginY={[2, 0]}>
      <Box position="relative" width="full" height={['4xs', 44]}>
        <Image
          alt="Mountains"
          src={post.feature_image}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Flex
        _hover={{ opacity: 0.8 }}
        transition="opacity 0.2s ease-in-out"
        direction="column"
      >
        <Heading as="h3" fontSize="2xl" marginTop={2} textAlign="center">
          {post.title}
        </Heading>

        <Flex
          marginTop={2}
          direction="column"
          flex="1"
          justify="space-between"
          height="full"
        >
          <Text
            as="p"
            textAlign="center"
            marginX="auto"
            fontSize={['md']}
            flex="1"
            height="full"
          >
            {post.excerpt}
          </Text>

          <Text
            as="small"
            fontSize="13px"
            textAlign="center"
            display="block"
            width="full"
            marginTop={2}
            fontWeight="thin"
          >
            {`${formattedDate} - ${formattedReadingTime}`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ArticleCard;
