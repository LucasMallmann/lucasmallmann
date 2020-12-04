import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from 'components/Header';
import Footer from 'components/Footer';

const HEADER_HEIGHT_PROPORTION = 12;

const Layout: React.FC = ({ children }) => {
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
