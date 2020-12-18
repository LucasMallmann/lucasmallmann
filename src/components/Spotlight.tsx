import React, { useMemo } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';
import Image from 'next/image';

// Utils
import { dayjs } from 'utils/date';

interface Props {
  post: PostOrPage;
}

const Spotlight: React.FC<Props> = ({ post }) => {
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
    <Flex direction="column">
      <Box position="relative" width="full" height={[64, '500px']}>
        <Image
          alt="Mountains"
          src={post.feature_image}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Heading
        as="h1"
        textAlign="center"
        marginTop={4}
        fontSize={['4xl', '5xl']}
      >
        {post.title}
      </Heading>

      <Box width={['full', '65%']} marginX="auto" marginTop={[4]}>
        <Text
          as="p"
          paddingX={[2, 0]}
          textAlign="center"
          marginX="auto"
          fontSize={['md', 'lg']}
          fontWeight="semi-bold"
        >
          {post.excerpt}
        </Text>

        <Text
          as="small"
          fontSize="sm"
          textAlign="center"
          display="block"
          width="full"
          marginTop={3}
          fontWeight="thin"
        >
          {`${formattedDate} - ${formattedReadingTime}`}
        </Text>
      </Box>
    </Flex>
  );
};

export default Spotlight;
