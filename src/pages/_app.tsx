import 'styles/global.css';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { AnimateSharedLayout } from 'framer-motion';

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
      <AnimateSharedLayout>
        <MDXProvider components={MDXComponents}>
          <Head>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </AnimateSharedLayout>
    </ThemeProvider>
  );
};

export default MyApp;
