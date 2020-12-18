import React from 'react';
import { AppProps } from 'next/app';
import 'focus-visible/dist/focus-visible';

import ThemeContainer from 'contexts/theme/ThemeContainer';

import 'prismjs/themes/prism-tomorrow.css';
import 'styles/code-snippet.css';
import 'styles/global.css';

import Layout from 'components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContainer>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContainer>
  );
};

export default MyApp;
