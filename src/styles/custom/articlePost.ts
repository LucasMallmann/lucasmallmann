const articlePostStyle = {
  baseStyle: ({ colorMode }) => ({
    borderRadius: '2px',
    h2: {
      fontSize: ['2xl', '4xl'],
      fontWeight: 'semi-bold',
      marginTop: '16px',
    },
    h3: {
      fontSize: ['xl', '4xl'],
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
    // code: {
    //   borderRadius: 'sm',
    //   padding: '2px',
    //   background: colorMode === 'dark' ? 'darkGray.400' : 'gray.100',
    //   color: 'red.400',
    //   fontSize: 'sm',
    // },
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
    div: {
      _hover: {
        boxShadow: '0 0 0 1px #3eb0ef',
      },
    },
    img: {
      width: '100%',
    },
    '.kg-gallery-container': {
      width: '100%',
      position: 'relative',
    },
    '.kg-gallery-row': {
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      webkitOverflowScrolling: 'touch',
      scrollBehavior: 'smooth',

      '.kg-gallery-image': {
        flex: 'none',
        // width: '33%',
        height: '400px',
        scrollSnapAlign: 'start',
        pointerEvents: 'none',
        img: {
          objectFit: 'cover',
        },
      },
    },
    'kg-bookmark-card': {
      display: 'flex',
    },
  }),
  defaultProps: {},
};

export default articlePostStyle;
