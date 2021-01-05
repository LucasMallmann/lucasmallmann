import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

type DataSourceTypes = 'blog';

export interface FrontMatterData {
  title: string;
  publishedAt: string;
  image?: string;
  summary: string;
}

export async function getFiles(type: DataSourceTypes): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getAllFilesFrontMatter(type: DataSourceTypes) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  const result = files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf-8'
    );

    const matterData = matter(source);
    console.log(matterData);

    return [
      {
        ...matterData.data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);

  return result;
}
