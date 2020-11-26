import React from 'react';
import {
  Button,
  Flex,
  useColorMode,
  Text,
  Link,
  Avatar,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      height={12}
      paddingX={4}
      backgroundColor="blue.900"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
    >
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
              <Box
                _hover={{
                  opacity: 0.8,
                }}
              >
                <Text
                  fontSize="md"
                  marginLeft={2}
                  color="white"
                  fontWeight={600}
                >
                  mallmann
                </Text>
              </Box>
            </Flex>
          </Link>
        </NextLink>

        <Flex as="nav" alignItems="center">
          <NextLink href="/">
            <Link
              href="/"
              position="relative"
              transition="all 0.2s ease"
              marginX={2}
              color="white"
              _before={{
                content: '""',
                position: 'absolute',
                width: '100%',
                marginTop: '10px',
                height: '2px',
                bottom: '-2px',
                left: 0,
                backgroundColor: 'gray.200',
                visibility: 'hidden',
                transform: 'scaleX(0)',
                transition: 'all 0.3s ease-in-out 0s',
              }}
              _hover={{
                color: 'gray.200',
                _before: {
                  visibility: 'visible',
                  transform: 'scaleX(1)',
                },
              }}
            >
              <Text as="span">blog</Text>
            </Link>
          </NextLink>

          <NextLink href="/">
            <Link
              href="/"
              position="relative"
              transition="all 0.2s ease"
              color="white"
              _before={{
                content: '""',
                position: 'absolute',
                width: '100%',
                marginTop: '10px',
                height: '2px',
                bottom: '-2px',
                left: 0,
                backgroundColor: 'gray.200',
                visibility: 'hidden',
                transform: 'scaleX(0)',
                transition: 'all 0.3s ease-in-out 0s',
              }}
              _hover={{
                color: 'gray.200',
                _before: {
                  visibility: 'visible',
                  transform: 'scaleX(1)',
                },
              }}
            >
              <Text as="span">projects</Text>
            </Link>
          </NextLink>
        </Flex>

        <Button onClick={toggleColorMode}>Toggle theme</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
