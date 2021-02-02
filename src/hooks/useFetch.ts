import useSWR, { responseInterface as ResponseInterface } from 'swr';

interface FetchPayload {
  url: string;
  revalidateOnFocus?: boolean;
  method?: 'GET' | 'POST' | 'PUT';
}

export function useFetch<Data = unknown, Error = unknown>({
  url,
  revalidateOnFocus = true,
  method = 'GET',
}: FetchPayload): Pick<
  ResponseInterface<Data, Error>,
  'data' | 'error' | 'mutate'
> {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (_url) => {
      const response = await fetch(_url, { method });
      const responseData = await response.json();
      return responseData;
    },
    {
      revalidateOnFocus,
    }
  );

  return { data, error, mutate };
}
