import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mt-16">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
