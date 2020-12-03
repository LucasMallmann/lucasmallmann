import React from 'react';
import { Flex, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const backgroundColor = useColorModeValue('gray.100', 'darkGray.600');
  const borderTop = useColorModeValue('1px solid #ddd', 'none');

  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      width="100vw"
      height={12}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      borderTop={borderTop}
    >
      <Link
        href="https://www.linkedin.com/in/lucas-mallmann-372745148/"
        isExternal
        marginX={2}
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 0.8,
        }}
      >
        <Icon as={FaLinkedin} width={6} height={6} />
      </Link>
      <Link
        href="https://github.com/lucasmallmann"
        isExternal
        marginX={2}
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 0.8,
        }}
      >
        <Icon as={FaGithub} width={6} height={6} />
      </Link>
      <Link
        href="https://twitter.com/lucasmallmann76"
        isExternal
        marginX={2}
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 0.8,
        }}
      >
        <Icon as={FaTwitter} width={6} height={6} />
      </Link>
      <Link
        href="https://instagram.com/lucas.mallmann23"
        isExternal
        marginX={2}
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 0.8,
        }}
      >
        <Icon as={FaInstagram} width={6} height={6} />
      </Link>
    </Flex>
  );
};

export default Footer;
