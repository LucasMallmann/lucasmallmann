import React, { useMemo } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';
import Image from 'next/image';

// Utils
import { dayjs } from 'utils/date';

interface Props {
  post: PostOrPage;
}

const Spotlight: React.FC<Props> = ({ post }) => {
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
    <div className="flex-col">
      <div className="relative h-64 md:h-spotlight-post">
        <Image
          alt="Mountains"
          src={post.feature_image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold text-center mt-4">
        {post.title}
      </h1>

      <div className="mx-auto mt-4 md:w-8/12">
        <p className="px-2 text-center text-md md:text-lg font-semibold mx-auto">
          {post.excerpt}
        </p>

        <small className="text-sm text-center w-full mt-3 font-extralight block">
          {`${formattedDate} - ${formattedReadingTime}`}
        </small>
      </div>
    </div>
  );
};

export default Spotlight;
