import React from 'react';
import {
  Flex,
  useColorMode,
  Text,
  Link,
  Heading,
  useColorModeValue,
  Avatar,
  Box,
  IconButton,
  HStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { HeaderSizes } from 'styles/constants';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const boxShadow = useColorModeValue('0px 1px rgba(0, 0, 0, 0.1)', 'none');
  const backgroundColor = useColorModeValue('white', 'darkGray.600');

  return (
    <Box
      as="header"
      height={HeaderSizes.height}
      backgroundColor={backgroundColor}
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      zIndex="docked"
      boxShadow={boxShadow}
      transition="all 0.1s ease-in-out"
    >
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="space-between"
        maxWidth="5xl"
        marginX="auto"
        paddingX={2}
      >
        <NextLink href="/">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Flex alignItems="center">
              <Avatar
                name="Lucas Mallmann"
                src="/me.jpeg"
                borderColor="blue.500"
                borderWidth="2px"
                size="md"
              />
              <Heading as="h1" fontSize={['lg', '2xl']} marginLeft={2}>
                Lucas Mallmann
              </Heading>
            </Flex>
          </Link>
        </NextLink>

        <HStack as="nav">
          <NextLink href="/">
            <Link
              href="/"
              position="relative"
              transition="all 0.2s ease"
              _before={{
                content: '""',
                position: 'absolute',
                width: '100%',
                marginTop: '10px',
                height: '2px',
                bottom: '-2px',
                left: 0,
                backgroundColor: 'black',
                visibility: 'hidden',
                transform: 'scaleX(0)',
                transition: 'all 0.3s ease-in-out 0s',
              }}
              _hover={{
                color: 'black',
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
              _before={{
                content: '""',
                position: 'absolute',
                width: '100%',
                marginTop: '10px',
                height: '2px',
                bottom: '-2px',
                left: 0,
                backgroundColor: 'black',
                visibility: 'hidden',
                transform: 'scaleX(0)',
                transition: 'all 0.3s ease-in-out 0s',
              }}
              _hover={{
                color: 'black',
                _before: {
                  visibility: 'visible',
                  transform: 'scaleX(1)',
                },
              }}
            >
              <Text as="span">projects</Text>
            </Link>
          </NextLink>

          <IconButton
            aria-label="Call Segun"
            backgroundColor="transparent"
            size="sm"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
