import React from 'react';

import { Tag as ChakraTag, useColorModeValue } from '@chakra-ui/react';

interface Props {
  children: string;
}

const Tag: React.FC<Props> = ({ children }) => {
  const tagBackgroundColor = useColorModeValue('gray.300', 'gray.600');
  const tagTextColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <ChakraTag
      size="sm"
      variant="solid"
      borderRadius="sm"
      backgroundColor={tagBackgroundColor}
      color={tagTextColor}
      fontWeight="thin"
    >
      {children}
    </ChakraTag>
  );
};

export default Tag;
