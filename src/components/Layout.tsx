import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import Header from 'components/Header';
import Footer from 'components/Footer';

const HEADER_HEIGHT_PROPORTION = 12;

const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Box
      maxWidth="700px"
      marginTop={HEADER_HEIGHT_PROPORTION}
      marginX="auto"
      paddingBottom={40}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
