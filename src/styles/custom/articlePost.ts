const articlePostStyle = {
  baseStyle: ({ colorMode }) => ({
    borderRadius: '2px',
    h2: {
      fontSize: ['2xl', '4xl'],
      fontWeight: 'semi-bold',
      marginTop: '16px',
    },
    'h2 + p:not(:first-of-type)': {
      marginTop: '4px',
    },
    p: {
      marginY: '16px',
      lineHeight: 'tall',
    },
    code: {
      borderRadius: 'sm',
      padding: '2px',
      background: colorMode === 'dark' ? 'darkGray.400' : 'gray.100',
      color: 'red.400',
      fontSize: 'sm',
    },
    blockquote: {
      margin: '32px auto',
      borderLeftWidth: '2px',
      borderColor: 'pink.500',
      padding: '0 20px',
      lineHeight: 'tall',
      fontSize: ['lg', '2xl'],
      fontFamily: 'Noto Serif',
    },
    a: {
      textDecoration: 'none',
      position: 'relative',
      transition: 'opacity 0.3s ease-in-out',
      _before: {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '1px',
        bottom: '-1px',
        backgroundColor: 'pink.500',
      },
      _hover: {
        opacity: 0.8,
      },
    },
    ul: {
      marginTop: '16px',
      padding: 0,

      li: {
        padding: 0,
        marginLeft: '24px',
        marginY: 4,
      },
    },
  }),
  defaultProps: {},
};

export default articlePostStyle;
