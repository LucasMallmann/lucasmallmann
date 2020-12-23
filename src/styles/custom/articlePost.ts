/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const articlePostStyle = {
  baseStyle: ({ colorMode }) => ({
    borderRadius: '2px',
    h2: {
      fontSize: ['2xl', '4xl'],
      fontWeight: 'semi-bold',
    },
    'h2:not(:first-of-type)': {
      marginTop: 4,
    },
    'h3:not(:first-of-type)': {
      marginTop: 1,
    },
    h3: {
      fontSize: ['2xl', '4xl'],
      fontWeight: 'semi-bold',
      marginTop: 4,
    },
    'h2 + p:not(:first-of-type)': {
      marginTop: 1,
    },
    p: {
      fontSize: 'lg',
      marginY: 4,
      lineHeight: 'tall',
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
      marginTop: 4,
      padding: 0,

      li: {
        padding: 0,
        marginLeft: '24px',
        marginY: 4,
        ul: {
          marginTop: '0',
          li: {
            marginTop: 1,
          },
        },
      },
    },

    ol: {
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
    '.kg-bookmark-container': {
      display: 'flex',
      // padding: 4,
      // borderWidth: '1px',
      // borderColor: colorMode === 'dark' ? 'gray.600' : 'gray.350',
      boxShadow: colorMode === 'dark' ? '0 0 1px #eee' : '0 0 1px #404040',
      marginY: 4,
      textDecoration: 'none',
      div: {
        boxShadow: 'none',
      },
      _before: {
        content: '""',
        backgroundColor: 'transparent',
      },
      _hover: {
        opacity: 1,
      },
    },
    '.kg-bookmark-content': {
      padding: 4,
      fontSize: '15px',
      transition: 'opacity 0.2s ease-in-out',
      _hover: {
        opacity: 0.8,
      },
    },
    '.kg-bookmark-title': {
      fontWeight: 'bold',
      fontSize: '18px',
      transition: 'color 0.1s ease-in-out',
      _hover: {
        color: '#3eb0ef',
      },
    },
    '.kg-bookmark-metadata': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 4,
    },
    '.kg-bookmark-icon': {
      width: '22px',
      height: '22px',
      marginRight: 2,
    },
    '.kg-bookmark-thumbnail': {
      position: 'relative',
      display: ['none', 'inline-block'],
      minWidth: '33%',
      maxHeight: '100%',
      img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  }),
  defaultProps: {},
};

export default articlePostStyle;
