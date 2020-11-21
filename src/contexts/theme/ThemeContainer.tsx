import React from 'react';
import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'styles/theme';

const GlobalStyles = css`
  a {
    cursor: pointer;
  }

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Global styles={GlobalStyles} />
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;
