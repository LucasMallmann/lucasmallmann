import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

/**
 * Components
 */
import MDXComponents from 'components/MDXComponents';
import SeeAlsoProject from 'components/SeeAlsoProject';

/**
 * Services
 */
import { PostFoundMetadata, getFileBySlug, getAllPostsFiles } from 'lib/mdx';

/**
 * Props type
 */
interface Props {
  projectMetadata: PostFoundMetadata;
}

const Project: NextPage<Props> = ({ projectMetadata }) => {
  const { frontMatter, mdxSource } = projectMetadata;

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      <div className="w-full mx-auto">
        <div className="max-w-3xl md:p-0 mx-auto">
          <h1 className="text-3xl px-4 md:p-0 font-bold md:text-5xl mt-4 md:mt-12 dark:text-gray-100">
            {frontMatter.title}
          </h1>
        </div>

        <div className="prose dark:prose-dark px-4 md:p-0 max-w-3xl mx-auto mt-8">
          {content}
        </div>

        <section className="bg-gray-100 px-4 md:px-0 md:mt-8 dark:bg-gray-875">
          <div className="max-w-3xl mx-auto dark:border-solid dark:border-t dark:border-gray-600">
            <h1 className="text-3xl font-bold py-4 dark:text-gray-200">
              Outros projetos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-12 md:mt-8">
              <SeeAlsoProject />
              <SeeAlsoProject />
              <SeeAlsoProject />
              <SeeAlsoProject />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = getAllPostsFiles('projects');

  const paths = blogPosts.map((postTitle) => ({
    params: {
      project: postTitle.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  Props,
  { project: string }
> = async ({ params }) => {
  const { project } = params;

  const post = await getFileBySlug({ type: 'projects', slug: project });

  return {
    props: {
      projectMetadata: post,
    },
  };
};

export default Project;
