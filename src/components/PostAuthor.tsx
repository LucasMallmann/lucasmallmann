import React, { useMemo } from 'react';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';

// Utils
import { dayjs } from 'utils/date';

interface Props {
  post: PostOrPage;
}

const PostAuthor: React.FC<Props> = ({ post }) => {
  const formattedDate = useMemo(() => {
    return dayjs(post.published_at).format('DD [de] MMM [de] YYYY');
  }, [post.published_at]);

  const formattedReadingTime = useMemo(() => {
    return post.reading_time <= 1
      ? `Leitura de ${post.reading_time} minuto`
      : `Leitura de ${post.reading_time} minutos`;
  }, [post.reading_time]);

  return (
    <Flex alignItems="center">
      <Box position="relative" height="36px" width="36px" borderRadius="full">
        <Image
          className="round-image"
          alt="Lucas Mallmann"
          src="/me.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box marginLeft={3}>
        <Text
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="semi-bold"
          fontFamily="sans-serif"
        >
          Lucas Mallmann
        </Text>
        <Text textTransform="uppercase" fontSize="12px" fontFamily="sans-serif">
          {formattedDate} - {formattedReadingTime}
        </Text>
      </Box>
    </Flex>
  );
};

export default PostAuthor;
