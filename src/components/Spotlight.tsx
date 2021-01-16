import React, { useMemo } from 'react';
import Image from 'next/image';

// Utils
import { dayjs } from 'utils/date';

// Types
import { FrontMatterData } from 'lib/mdx';

interface Props {
  post: FrontMatterData;
}

const Spotlight: React.FC<Props> = ({ post }) => {
  const formattedDate = useMemo(
    () => dayjs(post.publishedAt).format('DD [de] MMMM [de] YYYY'),
    [post.publishedAt]
  );

  const formattedReadingTime = useMemo(() => {
    return post.readingTime <= 1
      ? `Leitura de ${post.readingTime} minuto`
      : `Leitura de ${post.readingTime} minutos`;
  }, [post.readingTime]);

  return (
    <div className="flex-col">
      <div className="relative h-64 md:h-spotlight-post">
        <Image
          alt="Mountains"
          src={post.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold text-center mt-4 dark:text-gray-200">
        {post.title}
      </h1>

      <div className="mx-auto mt-4 md:w-8/12">
        <p className="px-2 text-center text-md md:text-lg mx-auto dark:text-gray-200 font-light">
          {post.summary}
        </p>

        <small className="text-sm text-center w-full mt-3 font-extralight block dark:text-gray-200">
          {`${formattedDate} - ${formattedReadingTime}`}
        </small>
      </div>
    </div>
  );
};

export default Spotlight;
