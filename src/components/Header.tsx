import React from 'react';
import {
  Button,
  Flex,
  useColorMode,
  Text,
  Link,
  PseudoBox,
  Avatar,
} from '@chakra-ui/core';
import NextLink from 'next/link';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" height={12} paddingX={4} backgroundColor="blue.900">
      <Flex
        align="center"
        justify="space-between"
        width="100%"
        maxWidth={[
          '100%', // base
          '100%', // 480px upwards
          '950px', // 768px upwards
        ]}
        marginY={0}
        marginX="auto"
      >
        <NextLink href="/">
          <Link
            href="/"
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Flex align="center">
              <Avatar name="Lucas Mallmann" src="/me.jpeg" size="sm" />
              <PseudoBox
                _hover={{
                  opacity: 0.8,
                }}
              >
                <Text
                  fontSize="md"
                  marginLeft={2}
                  color="white"
                  fontWeight="bold"
                >
                  mallmann
                </Text>
              </PseudoBox>
            </Flex>
          </Link>
        </NextLink>

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
    </Flex>
  );
};

export default Header;
