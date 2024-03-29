import 'styles/global.css';

import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';

import MDXComponents from 'components/MDXComponents';

/**
 * Configs
 */
import SEO from 'config/next-seo.config';
import Script from 'next/script';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <ThemeProvider attribute="class">
        <MDXProvider components={MDXComponents}>
          <Head>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
          </Head>
          <DefaultSeo {...SEO} />
          {getLayout(<Component {...pageProps} />)}
        </MDXProvider>
      </ThemeProvider>

      <Script
        src="https://analytics.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        strategy="lazyOnload"
      />
    </>
  );
};

export default MyApp;
