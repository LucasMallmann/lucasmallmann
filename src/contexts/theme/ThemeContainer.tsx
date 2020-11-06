import React from 'react';
import {
  ThemeProvider as ChackraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import theme from 'styles/theme';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChackraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          <Global styles={GlobalStyles} />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChackraThemeProvider>
  );
};

export default ThemeContainer;
