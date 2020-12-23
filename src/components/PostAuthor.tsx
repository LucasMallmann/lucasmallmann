import React from 'react';
import Image from 'next/image';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const PostAuthor: React.FC = () => {
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
          30 nov 2020 - 1 minuto de leitura
        </Text>
      </Box>
    </Flex>
  );
};

export default PostAuthor;
