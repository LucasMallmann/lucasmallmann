import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
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
      300: '#eeeeee',
      400: '#8C8C8C',
      600: '#29292e',
      700: '#404040',
      800: '#1D1D1D',
    },
    blue: {
      900: '#414361',
    },
    pink: {
      400: '#F17D99',
      500: '#ef476f',
    },
    darkGrey: {
      500: '#272A2B',
    },
  },
  radii: {
    sm: '4px',
    md: '8px',
    full: '50%',
  },
});

export default customTheme;
