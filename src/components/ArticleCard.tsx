import React, { useMemo } from 'react';
import Image from 'next/image';
import { Box, color, Flex, Heading, Text } from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';

// Utils
import { dayjs } from 'utils/date';

interface Props {
  post: PostOrPage;
}

const ArticleCard: React.FC<Props> = ({ post }) => {
  const formattedDate = useMemo(
    () => dayjs(post.published_at).format('DD [de] MMMM [de] YYYY'),
    [post.published_at]
  );

  const formattedReadingTime = useMemo(() => {
    return post.reading_time <= 1
      ? `Leitura de ${post.reading_time} minuto`
      : `Leitura de ${post.reading_time} minutos`;
  }, [post.reading_time]);

  return (
    <div className="flex-col text-center my-2 md:my-0">
      <div className="relative h-48 md:h-44">
        <Image
          alt="Mountains"
          src={post.feature_image}
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
            {post.excerpt}
          </p>

          <small className="text-center block mt-3 text-gray-700 dark:text-gray-200 font-light">
            {`${formattedDate} - ${formattedReadingTime}`}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
