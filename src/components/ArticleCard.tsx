import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTag } from 'react-icons/fa';
import { Icon } from '@chakra-ui/icons';

const ArticleCard: React.FC = () => {
  const boxShadow = useColorModeValue('0px 2px 4px rgba(0, 0, 0, 0.1)', 'none');
  const borderColor = useColorModeValue('gray.200', 'transparent');
  const articleBackgroundColor = useColorModeValue('inherit', 'darkGrey.500');
  const tagBackgroundColor = useColorModeValue('gray.300', 'gray.700');
  const tagTextColor = useColorModeValue('gray.800', 'gray.100');
  const tagIconBgColor = useColorModeValue('gray.800', 'gray.400');

  return (
    <NextLink href="/" as="/">
      <Link
        href="/"
        _hover={{
          textDecoration: 'none',
        }}
        display="block"
        width="100%"
      >
        <Flex
          as="div"
          backgroundColor={articleBackgroundColor}
          position="relative"
          padding={4}
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
          <Flex direction="column" flex="1">
            <Heading as="h3" fontSize={['md', 'xl']} fontWeight={600}>
              Another day another dollar
            </Heading>
            <Text
              fontSize="2md"
              fontWeight="thin"
              lineHeight="22px"
              minHeight="60px"
            >
              Hey yo, give me a dollar
            </Text>

            <HStack spacing={2} alignItems="center" marginTop={4}>
              <Icon as={FaTag} width={3} height={3} color={tagIconBgColor} />
              <Tag
                size="sm"
                variant="solid"
                borderRadius="sm"
                backgroundColor={tagBackgroundColor}
                color={tagTextColor}
                fontWeight="thin"
              >
                nodejs
              </Tag>
            </HStack>
            <Text fontSize="xs" fontWeight="thin">
              02 de junho de 2020 - Leitura de 1 minuto
            </Text>
          </Flex>

          <Image
            alt="Mountains"
            src="/desktop.jpg"
            width={180}
            height={150}
            quality={100}
            objectFit="cover"
          />
        </Flex>
      </Link>
    </NextLink>
  );
};

export default ArticleCard;
