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
    'semi-bold': 600,
  },
  fontSizes: {
    '4xl': '32px',
  },
  colors: {
    purple: {
      // 500: '',
      500: '#9466FF',
    },
    pantone: {
      500: '#9A01CD',
    },
    gray: {
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  },
  radii: {
    sm: '4px',
    md: '8px',
    full: '50%',
  },
});

export default customTheme;
