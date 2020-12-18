import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from 'components/Header';

import { HeaderSizes } from 'styles/constants';

const Layout: React.FC = ({ children }) => {
  return (
    <Box marginTop={HeaderSizes.height}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
