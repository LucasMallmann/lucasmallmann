import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import 'styles/global.css';
import 'styles/tailwind.css';

import Layout from 'components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
