import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { allBlogs } from 'contentlayer/generated';
/**
 * Services
 */
import { pick } from 'contentlayer/client';

const title = 'Lucas Mallmann – Blog';
const url = 'https://personal-blog-coral.vercel.app/blog';
const description =
  'Ideias sobre tecnologia, desenvolvimento de software, carreira e reflexões sobre a vida.';

export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {

  console.log(props.posts)

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex-col">
        <h1 className="text-center">Blog page</h1>
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'tags'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: {
      posts,
    },
  };
}
