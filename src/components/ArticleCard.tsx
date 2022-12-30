import React, { useMemo } from 'react';
import Image from 'next/image';

/**
 * Uti;s
 */
import { dayjs } from 'utils/date';

/**
 * Types
 */
import { formatToCommaNumber } from 'utils/number';
import { Blog } from 'contentlayer/generated';

type Props = {
  post: Blog;
};

export default function ArticleCard({ post }: Props) {
  const views = 0;

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
    <div className="flex-col text-center my-2 md:my-0">
      <div className="relative h-48 md:h-44">
        <Image
          alt="Mountains"
          src={post.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-col hover:opacity-80 transition-opacity duration-200">
        <h3 className="text-xl mt-2 text-center font-semibold dark:text-gray-200">
          {post.title}
        </h3>

        <div className="flex-col mt-2 flex-1 justify-between h-full">
          <p className="text-center mx-auto leading-relaxed flex-1 h-full dark:text-gray-200 font-light">
            {post.summary}
          </p>

          {views && (
            <small className="text-xs text-center block mt-2 text-gray-700 dark:text-gray-500 font-light">
              {`${formatToCommaNumber(views)} views`}
            </small>
          )}

          <small className="text-center block mt-3 text-gray-700 dark:text-gray-200 font-light">
            {`${formattedDate} - ${formattedReadingTime}`}
          </small>
        </div>
      </div>
    </div>
  );
}
