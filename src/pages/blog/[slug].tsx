import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import hydrate from 'next-mdx-remote/hydrate';

/**
 * Types
 */
import type { PostFoundMetadata } from 'lib/mdx';

/**
 * Components
 */
import PostAuthor from 'components/PostAuthor';
import MDXComponents from 'components/MDXComponents';
import BlogSEO from 'components/BlogSEO';

/**
 * Services
 */
import { getAllPostsFiles, getFileBySlug } from 'lib/mdx';

const SocialMediaShare = dynamic(() => import('components/SocialMediaShare'), {
  ssr: false,
});
interface Props {
  postMetadata: PostFoundMetadata;
}

const Post: NextPage<Props> = ({ postMetadata }) => {
  const { frontMatter, mdxSource } = postMetadata;

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      <BlogSEO
        url={`https://personal-blog-coral.vercel.app/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <div className="mt-28 md:mt-32 w-full lg:w-8/12 mx-auto">
        <div className="max-w-2xl p-4 md:p-0 mx-auto">
          <div className="-ml-2">
            {frontMatter.tags.map((tag) => (
              <NextLink
                href="/"
                key={`${tag}_${Math.random().toString(36).substr(2, 9)}`}
              >
                <span
                  className="bg-red-400 inline-block font-bold tracking-wider border-solid ml-2 rounded-sm uppercase color-white text-white text-xs p-1 transition-bg duration-200 cursor-pointer hover:bg-red-500"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {tag}
                </span>
              </NextLink>
            ))}
          </div>
          <h1 className="text-3xl font-semibold md:text-5xl mt-4 dark:text-gray-100">
            {frontMatter.title}
          </h1>

          <p className="text-xl mt-5 leading-relaxed font-thin dark:text-gray-100">
            {frontMatter.summary}
          </p>

          <div className="mt-4">
            <SocialMediaShare />
          </div>

          <hr className="bg-gray-750 h-px mt-8 mb-4 border-0" />

          <PostAuthor postMetadata={frontMatter} />
        </div>

        <div className="relative w-full h-64 mt-8 md:h-post-thumbnail">
          <Image
            alt={frontMatter.title}
            src={frontMatter.image}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="prose dark:prose-dark max-w-2xl mx-auto mt-8">
          {content}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = getAllPostsFiles('blog');

  const paths = blogPosts.map((postTitle) => ({
    params: {
      slug: postTitle.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  const { slug } = params;

  const post = await getFileBySlug({ type: 'blog', slug });

  return {
    props: {
      postMetadata: post,
    },
  };
};

export default Post;
