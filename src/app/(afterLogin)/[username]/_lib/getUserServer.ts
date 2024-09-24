import { QueryFunction } from '@tanstack/react-query';
import { IUser } from '@/model/IUser';
import { cookies } from 'next/headers';

export const getUserServer: QueryFunction<IUser, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users${username}`, {
    next: {
      tags: ['users', username],
    },
    credentials: 'include',
    headers: { Cookie: cookies().toString() },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
