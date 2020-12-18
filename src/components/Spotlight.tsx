import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';

import Image from 'next/image';

interface Props {
  post: PostOrPage;
}

const Spotlight: React.FC<Props> = ({ post }) => {
  return (
    <Flex direction="column">
      <Box position="relative" width="100%" height={[64, '500px']}>
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

      <Text
        as="p"
        paddingX={[2, 0]}
        textAlign="center"
        marginTop={[4, 6]}
        width={['100%', '65%']}
        marginX="auto"
        fontSize={['md', 'lg']}
      >
        {post.excerpt}
      </Text>
    </Flex>
  );
};

export default Spotlight;
