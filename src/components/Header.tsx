import React from 'react';
import { Button, Flex, useColorMode, Image, Text } from '@chakra-ui/core';
import Link from 'next/link';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      height="48px"
      paddingX={4}
      backgroundColor="blue.900"
    >
      <Link href="/">
        <Flex align="center">
          <Image
            src="/me.jpeg"
            alt="Picture of the author"
            size="30px"
            borderRadius="full"
            display="inline-block"
          />
          <Text fontSize="md" marginLeft={2} color="white">
            mallmann
          </Text>
        </Flex>
      </Link>

      <Button
        onClick={toggleColorMode}
        outline="none"
        _active={{
          backgroundColor: 'purple.500',
        }}
        _focus={{
          backgroundColor: 'purple.500',
        }}
      >
        Toggle {colorMode === 'light' ? 'dark' : 'light'}
      </Button>
    </Flex>
  );
};

export default Header;
