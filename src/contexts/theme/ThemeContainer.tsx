import React from 'react';
import {
  ThemeProvider as ChackraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import theme from 'styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChackraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChackraThemeProvider>
  );
};

export default ThemeContainer;
