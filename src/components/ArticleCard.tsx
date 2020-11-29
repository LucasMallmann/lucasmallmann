import React from 'react';
import NextLink from 'next/link';
import { Box as Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

const ArticleCard: React.FC = () => {
  const boxShadow = useColorModeValue('0px 2px 4px rgba(0, 0, 0, 0.1)', 'none');
  const borderColor = useColorModeValue('gray.200', 'transparent');
  const articleBackgroundColor = useColorModeValue('inherit', 'darkGrey.500');

  return (
    <NextLink href="/" as="/">
      <Link
        href="/"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Flex
          as="div"
          backgroundColor={articleBackgroundColor}
          position="relative"
          padding={4}
          marginBottom={10}
          borderRadius="sm"
          boxShadow={boxShadow}
          borderWidth="1px"
          borderColor={borderColor}
          transform="scale(1)"
          transition="transform 0.3s ease-in-out"
          _before={{
            borderWidth: '1px 0 1px 0',
            transform: 'scaleX(0)',

            content: '""',
            position: 'absolute',
            transition: 'all 0.3s ease-in-out',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            borderStyle: 'solid',
            borderRadius: 'sm',
            // borderColor: 'purple.500',
            borderColor: 'pink.500',
          }}
          _after={{
            borderWidth: '0 1px 0 1px',
            transform: 'scaleY(0)',

            content: '""',
            position: 'absolute',
            transition: 'all 0.3s ease-in-out',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            borderStyle: 'solid',
            borderRadius: 'sm',
            borderColor: 'pink.500',
          }}
          _hover={{
            borderColor: 'transparent',
            transform: 'scale(1.02)',
            transition: 'all 0.3s ease-in-out',
            _before: {
              transform: 'scale(1, 1)',
            },
            _after: {
              transform: 'scale(1, 1)',
            },
          }}
        >
          <Text>oi</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default ArticleCard;
