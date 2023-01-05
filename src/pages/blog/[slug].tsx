import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { allBlogs, Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

/**
 * Components
 */
import PostAuthor from 'components/PostAuthor';
import BlogSEO from 'components/BlogSEO';
import components from 'components/MDXComponents';
import { NextPageWithLayout } from 'pages/_app';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SocialMediaShare from 'components/SocialMediaShare';

type Props = {
  post: Blog;
};

const Post: NextPageWithLayout = ({ post }: Props) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <BlogSEO
        url={`https://personal-blog-coral.vercel.app/blog/${post.slug}`}
        {...post}
      />
      <div className="w-full lg:w-8/12 mx-auto">
        <div className="max-w-2xl p-4 md:p-0 mx-auto">
          <div className="-ml-2">
            {post.tags.map((tag) => (
              <NextLink
                href="/"
                key={`${tag}_${Math.random().toString(36).substr(2, 9)}`}
                legacyBehavior
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
            {post.title}
          </h1>

          <p className="text-xl mt-5 leading-relaxed font-thin dark:text-gray-100">
            {post.summary}
          </p>

          <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <SocialMediaShare />
            </div>
          </div>

          <hr className="bg-gray-750 h-px mt-8 mb-4 border-0" />

          <PostAuthor postMetadata={post} />
        </div>

        <div className="relative w-full h-64 mt-8 md:h-post-thumbnail">
          <Image
            alt={post.title}
            src={post.image}
            priority
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:!prose-dark max-w-2xl mx-auto mt-8">
          <Component
            components={
              {
                ...components,
              } as any
            }
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return { props: { post } };
}

Post.getLayout = (page) => (
  <>
    <Header />
    {page}
    <Footer />
  </>
);

export default Post;
