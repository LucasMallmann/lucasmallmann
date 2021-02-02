import React, { useEffect } from 'react';

/**
 * Hooks
 */
import { useFetch } from 'hooks/useFetch';

/**
 * Utils
 */
import { formatToCommaNumber } from 'utils/number';

/**
 * Types
 */
import type { PageView } from 'types/PageView';

interface Props {
  slug: string;
}

const ViewCounter: React.FC<Props> = ({ slug }) => {
  const { data, mutate } = useFetch<PageView>({
    url: `/api/views/${slug}`,
  });

  const views = data?.total;

  useEffect(() => {
    const registerView = async () => {
      await fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

      mutate();
    };

    registerView();
  }, [mutate, slug]);

  return <>{views ? formatToCommaNumber(views) : '•'} views</>;
};

export default ViewCounter;
