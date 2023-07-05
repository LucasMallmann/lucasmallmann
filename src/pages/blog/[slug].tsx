import React, { useTransition } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
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
import classNames from 'classnames';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const SocialMediaShare = dynamic(() => import('components/SocialMediaShare'), {
  ssr: false,
});

const Comments = dynamic(() => import('components/Comments'), {
  ssr: false,
});

type Props = {
  post: Blog;
};

const Post: NextPageWithLayout = ({ post }: Props) => {
  const Component = useMDXComponent(post.body.code);
  const router = useRouter();

  return (
    <>
      <BlogSEO url={`https://lucasmallmann.dev/blog/${post.slug}`} {...post} />
      <div className="w-full lg:w-8/12 mx-auto">
        <div className="max-w-2xl px-8 md:p-0 mx-auto">
          <div className="-ml-2">
            {post.tags.map((tag) => (
              <NextLink
                href={`/blog?tag=${tag}`}
                key={`${tag}_${Math.random().toString(36).substr(2, 9)}`}
                legacyBehavior
              >
                <span
                  className={classNames(
                    'bg-red-400 inline-block font-semibold tracking-wider',
                    'ml-2 rounded-sm lowercase color-white text-white text-xs p-1',
                    'transition-bg duration-200 cursor-pointer hover:bg-red-500'
                  )}
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

        <div className="relative w-full max-w-3xl mx-auto h-[380px] mt-8 md:h-post-thumbnail rounded">
          <Image
            alt={post.title}
            src={post.image}
            priority
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:!prose-dark max-w-2xl px-8 sm:px-0 mx-auto mt-8">
          <Component
            components={
              {
                ...components,
              } as any
            }
          />
        </div>

        {/* Comments */}
        <div className="mt-8 px-8 max-w-3xl mx-auto">
          <Comments title={post.title} url={router.pathname} id={post.slug} />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const paths = [];

  allBlogs.forEach((blog) => {
    locales.forEach((locale) => {
      paths.push({ params: { slug: blog.slug }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params, locale }) => {
  const slugPosts = allBlogs.filter((post) => post.slug === params.slug);
  const post = slugPosts.find((post) => post.lang === locale);
  return { props: { post } };
};

Post.getLayout = (page) => (
  <>
    <Header />
    {page}
    <Footer />
  </>
);

export default Post;
