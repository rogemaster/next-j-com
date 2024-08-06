import { QueryFunction } from '@tanstack/react-query';
import { IPost } from '@/model/IPost';

export const getSearchResult: QueryFunction<
  IPost[],
  [_1: string, _2: string, searchParams: { q: string; f?: string; pf?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchParams.q}?${searchParams.toString()}`,
    {
      // react-query 에서는 객체가 파라미터로 들어갈수 있으나 next tag 에서는 객체가 들어 갈수 없다.
      // next 캐싱은 react-query 와 사용법이 좀 다르다.
      next: {
        tags: ['posts', 'search', searchParams.q],
      },
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
