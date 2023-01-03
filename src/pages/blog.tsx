import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { allBlogs } from 'contentlayer/generated';
/**
 * Services
 */
import { pick } from 'contentlayer/client';
import BlogPost from 'components/BlogPost';

const title = 'Lucas Mallmann – Blog';
const url = 'https://personal-blog-coral.vercel.app/blog';
const description =
  'Ideias sobre tecnologia, desenvolvimento de software, carreira e reflexões sobre a vida.';

export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
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
      <div className="flex-col max-w-3xl mx-auto mt-12 px-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 my-4 tracking-tight md:text-5xl md:mt-4">
            Meu Blog pessoal
          </h1>
          <p className="text-gray-800 dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            quisquam vel omnis quo consectetur maiores id doloremque enim vero?
            Recusandae hic ipsa autem inventore reiciendis id magnam iusto, quae
            sapiente.
          </p>
        </div>

        <div className="mt-8">
          <BlogPost />
          <BlogPost />
        </div>
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
