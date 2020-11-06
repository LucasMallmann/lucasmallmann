import React from 'react';

import Header from 'components/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
