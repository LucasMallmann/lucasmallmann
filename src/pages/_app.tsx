import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';

import 'styles/global.css';

/**
 * Components
 */
import Layout from 'components/Layout';
import MDXComponents from 'components/MDXComponents';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
