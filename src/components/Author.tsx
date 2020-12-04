import React from 'react';
import { Avatar, Divider, Flex, Text } from '@chakra-ui/react';

const Author: React.FC = () => (
  <>
    <Divider marginY={6} />
    <Flex direction="column" alignItems="center">
      <Avatar
        name="Lucas Mallmann"
        src="/me.jpeg"
        width={24}
        height={24}
        borderWidth="3px"
        borderColor="pink.500"
      />
      <Text
        as="p"
        lineHeight="tall"
        marginTop={4}
        textAlign="center"
        letterSpacing="wide"
      >
        Olá, eu sou o Lucas Mallmann! Sou um Engenheiro de Software Fullstack,
        atualmente trabalhando com ReactJS, Typescript & NodeJS. Me esforço ao
        máximo para levar o conhecimento que adquiro às pessoas, contribuindo
        com a comunidade e explicando a tecnologia de uma maneira simples! Tenho
        interesse em discussões sobre o ecossistema Javascript, projetos
        Open-Source, Data-Science, e claro, sobre como podemos expandir mais
        conhecimento sobre tecnologia no mundo
      </Text>
    </Flex>
    <Divider marginTop={6} />
  </>
);

export default Author;
