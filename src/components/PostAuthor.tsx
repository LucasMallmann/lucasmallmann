import React, { useMemo } from 'react';
import Image from 'next/image';

// Utils
import { dayjs } from 'utils/date';

// Types
import { Blog } from 'contentlayer/generated';

type Props = {
  postMetadata: Blog;
};

export default function PostAuthor({ postMetadata }: Props) {
  const formattedDate = useMemo(() => {
    return dayjs(postMetadata.publishedAt).format('DD [de] MMM [de] YYYY');
  }, [postMetadata.publishedAt]);

  const formattedReadingTime = useMemo(() => {
    return postMetadata.readingTime <= 1
      ? 'Leitura de 1 minuto'
      : `Leitura de ${Math.round(postMetadata.readingTime)} minutos`;
  }, [postMetadata.readingTime]);

  return (
    <div className="flex align-middle">
      <div style={{ height: '36px', width: '36px' }}>
        <Image
          className="round-image"
          alt="Lucas Mallmann"
          src="/me.jpeg"
          width={36}
          height={36}
        />
      </div>
      <div className="ml-3">
        <p
          className="uppercase text-sm font-semibold dark:text-gray-100 tracking-wide"
          style={{ fontFamily: 'sans-serif' }}
        >
          Lucas Mallmann
        </p>
        <time
          className="text-xs uppercase dark:text-gray-100"
          style={{ fontFamily: 'sans-serif' }}
        >
          {formattedDate} - {formattedReadingTime}
        </time>
      </div>
    </div>
  );
}
