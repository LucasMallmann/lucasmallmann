/* eslint-disable global-require */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingtime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import type { MdxRemote } from 'next-mdx-remote/types';
import mdxPrism from 'mdx-prism';

// Components to use inside MDX
import MDXComponents from 'components/MDXComponents';

const root = process.cwd();

type DataSourceTypes = 'blog';

export interface FrontMatterData {
  title: string;
  publishedAt: string;
  image?: string;
  summary: string;
  slug: string;
  readingTime: number;
  tags?: string[];
}

export async function getFiles(type: DataSourceTypes): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'data', type));
}

interface GetAllFilesPayload {
  type: DataSourceTypes;
}

export function getAllPostsFiles(type: DataSourceTypes): string[] {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getAllFilesFrontMatter({
  type,
}: GetAllFilesPayload): Promise<FrontMatterData[]> {
  const files = fs.readdirSync(path.join(root, 'data', type));

  const result: FrontMatterData[] = files
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(root, 'data', type, slug),
        'utf-8'
      );

      const { data, content } = matter(source);

      const postReadingTime = readingtime(content).minutes;

      return {
        ...(data as FrontMatterData),
        slug: slug.replace('.mdx', ''),
        readingTime: postReadingTime < 1 ? 1 : Math.round(postReadingTime),
      };
    })
    .sort((a, b) => {
      return b.publishedAt.localeCompare(a.publishedAt);
    });

  return result;
}

interface GetFileBySlugPayload {
  type: DataSourceTypes;
  slug: string;
}

export interface PostFoundMetadata {
  mdxSource: MdxRemote.Source;
  frontMatter: FrontMatterData;
}

export async function getFileBySlug({
  type,
  slug,
}: GetFileBySlugPayload): Promise<PostFoundMetadata> {
  const source = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`));

  const frontMatter = matter(source);
  const frontMatterData = frontMatter.data as FrontMatterData;

  const mdxSource: MdxRemote.Source = await renderToString(
    frontMatter.content,
    {
      components: MDXComponents,
      mdxOptions: {
        remarkPlugins: [
          require('remark-autolink-headings'),
          require('remark-slug'),
          require('remark-code-titles'),
        ],
        rehypePlugins: [mdxPrism],
      },
    }
  );

  const postReadingTime = readingtime(frontMatter.content).minutes;

  return {
    mdxSource,
    frontMatter: {
      ...frontMatterData,
      slug,
      readingTime: postReadingTime < 1 ? 1 : Math.round(postReadingTime),
    },
  };
}
