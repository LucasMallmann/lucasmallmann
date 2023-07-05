import { HiOutlineTag } from 'react-icons/hi';
import Link from 'next/link';
import { dayjs } from 'utils/date';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
};

export default function BlogPost({
  title,
  date,
  description,
  tags,
  slug,
}: Props) {
  const { locale } = useRouter();

  dayjs.locale(locale);

  return (
    <Link href={`/blog/${slug}`} className="w-full block mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h4 className="w-full text-2xl font-medium md:text-xl">{title}</h4>
        <small className="w-32 md:my-2 text-left text-gray-600 dark:text-gray-500 md:text-right capitalize">
          {dayjs(date).format('MMMM D, YYYY')}
        </small>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>

      <div className="flex items-center mt-2">
        <span className="md:ml-1 text-xs text-gray-800 dark:text-gray-400">
          {tags.join(', ')}
        </span>
      </div>
    </Link>
  );
}
