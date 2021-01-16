import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingtime from 'reading-time';

const root = process.cwd();

type DataSourceTypes = 'blog';

export interface FrontMatterData {
  title: string;
  publishedAt: string;
  image?: string;
  summary: string;
  slug: string;
  readingTime: number;
}

export async function getFiles(type: DataSourceTypes): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'data', type));
}

interface GetAllFilesPayload {
  type: DataSourceTypes;
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
        readingTime: postReadingTime < 1 ? 1 : postReadingTime,
      };
    })
    .sort((a, b) => {
      return b.publishedAt.localeCompare(a.publishedAt);
    });

  return result;
}
