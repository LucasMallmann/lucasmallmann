import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    body: 'Open Sans, system-ui, sans-serif',
    heading: 'Open Sans, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    purple: {
      500: '#8257e5',
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
