import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';

import 'styles/global.css';

/**
 * Components
 */
import Layout from 'components/Layout';
import MDXComponents from 'components/MDXComponents';

/**
 * Configs
 */
import SEO from 'config/next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO}>
        <MDXProvider components={MDXComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </DefaultSeo>
    </ThemeProvider>
  );
};

export default MyApp;
