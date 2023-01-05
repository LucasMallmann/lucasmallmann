const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              color: theme('colors.gray.800'),
              a: {
                color: theme('colors.blue.500'),
                '&:hover': {
                  color: theme('colors.blue.700'),
                },
                code: { color: theme('colors.blue.400') },
              },
              'h1,h2,h3,h4': {
                color: theme('colors.gray.800'),
                'scroll-margin-top': spacing[32],
              },
              code: { color: theme('colors.pink.500') },
              'blockquote p:first-of-type::before': false,
              'blockquote p:last-of-type::after': false,
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.blue.400'),
                '&:hover': {
                  color: theme('colors.blue.600'),
                },
                code: { color: theme('colors.blue.400') },
              },
              blockquote: {
                borderLeftColor: theme('colors.gray.700'),
                color: theme('colors.gray.300'),
              },
              'h1,h2,h3,h4': {
                color: theme('colors.gray.100'),
                'scroll-margin-top': spacing[32],
              },
              hr: { borderColor: theme('colors.gray.700') },
              ol: {
                li: {
                  '&:before': { color: theme('colors.gray.500') },
                },
              },
              ul: {
                li: {
                  '&:before': { backgroundColor: theme('colors.gray.500') },
                },
              },
              strong: { color: theme('colors.gray.300') },
              thead: {
                color: theme('colors.gray.100'),
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.gray.700'),
                },
              },
            },
          },
        };
      },
      colors: {
        gray: {
          750: '#262626',
          775: '#232323',
          850: '#1C252E',
          875: '#1d1d1d',
          950: '#0E141B',
        },
        purple: {
          800: '#2F35CB',
        },
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
