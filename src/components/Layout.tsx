import React from 'react';

import Header from 'components/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mt-2">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
