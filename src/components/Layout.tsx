import React from 'react';

import Header from 'components/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mt-16">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
