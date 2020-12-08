import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import articlePostStyle from 'styles/custom/articlePost';

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'gray.200')(props),
        bg: mode('white', 'gray.800')(props),
      },
    }),
  },
  fonts: {
    body: 'Open Sans, system-ui, sans-serif',
    heading: 'Open Sans, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    thin: 300,
    'semi-bold': 600,
  },
  fontSizes: {
    '4xl': '32px',
    '2md': '14px',
  },
  colors: {
    purple: {
      500: '#9466FF',
    },
    pantone: {
      500: '#9A01CD',
    },
    gray: {
      100: '#F3F3F3',
      300: '#eeeeee',
      350: '#dedede',
      400: '#8C8C8C',
      600: '#404040',
      700: '#29292e',
      800: '#1D1D1D',
    },
    blue: {
      900: '#414361',
    },
    pink: {
      400: '#F17D99',
      500: '#ef476f',
    },
    darkGray: {
      400: '#373737',
      500: '#272A2B',
      600: '#262626',
    },
  },
  radii: {
    sm: '4px',
    md: '8px',
    full: '50%',
  },
  components: {
    ArticlePost: articlePostStyle,
  },
});

export default customTheme;
