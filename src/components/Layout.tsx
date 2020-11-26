import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from 'components/Header';

const HEADER_HEIGHT_PROPORTION = 12;

const Layout: React.FC = ({ children }) => {
  return (
    <Box maxWidth="700px" marginTop={HEADER_HEIGHT_PROPORTION} marginX="auto">
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
