import { QueryFunction } from '@tanstack/react-query';
import { IPost } from '@/model/IPost';

export const getUserPosts: QueryFunction<IPost[], [_1: string, _2: string, string]> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts`, {
    next: {
      tags: ['posts', 'users', username],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
