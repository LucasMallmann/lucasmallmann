import React, { Suspense, useState } from 'react';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { allBlogs } from 'contentlayer/generated';
/**
 * Services
 */
import { pick } from 'contentlayer/client';
import BlogPost from 'components/BlogPost';
import { NextPageWithLayout } from './_app';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

const title = 'Lucas Mallmann – Blog';
const url = 'https://lucasmallmann.dev/blog';
const description =
  'Ideias sobre tecnologia, desenvolvimento de software, carreira e reflexões sobre a vida.';

const Blog: NextPageWithLayout = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { posts } = props;

  const { t } = useTranslation('blog');

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

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
      <div className="flex-col max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 my-4 tracking-tight md:text-5xl md:mt-4">
          Blog
        </h1>
        <p className="text-gray-800 dark:text-gray-100">{t('description')}</p>

        <div className="relative w-full mt-4">
          <input
            aria-label="Search articles"
            type="text"
            placeholder={t('search')}
            className={classNames(
              'block w-full px-4 py-2 text-gray-900',
              'bg-white border border-gray-200 rounded-md dark:border-gray-900',
              'focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
            )}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            {t('heading')}
          </h3>
          {!filteredBlogPosts.length ? (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {t('notFound')}
            </p>
          ) : (
            filteredBlogPosts.map((post) => (
              <BlogPost
                key={post.slug}
                date={post.publishedAt}
                description={post.summary}
                tags={post.tags}
                title={post.title}
                slug={post.slug}
              />
            ))
          )}
        </Suspense>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ locale }) => {
  const posts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'tags', 'lang'])
    )
    .filter((post) => post.lang === locale)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: {
      posts,
    },
  };
};

Blog.getLayout = (page) => {
  return (
    <>
      <Header />
      <main className="px-8">{page}</main>
      <Footer />
    </>
  );
};

export default Blog;
