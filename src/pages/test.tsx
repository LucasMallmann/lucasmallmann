import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';

import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

import { getAllFilesFrontMatter } from 'lib/mdx';

interface Props {
  source: MdxRemote.Source;
}

const Test: NextPage<Props> = ({ source }) => {
  const content = hydrate(source);

  return (
    <div className="flex-col p-0 sm:p-2 lg:p-0">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto">{content}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const source = 'Some **mdx** text, without a component ';
  const mdxSource = await renderToString(source);

  const all = await getAllFilesFrontMatter({ type: 'blog' });

  console.log(all);

  return {
    props: {
      source: mdxSource,
    },
  };
};

export default Test;
