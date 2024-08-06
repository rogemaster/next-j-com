'use client';

import { useQuery } from '@tanstack/react-query';
import Post from '@/app/(afterLogin)/_component/Post';
import { IPost } from '@/model/IPost';
import { getFollowingPosts } from '@/app/(afterLogin)/home/_lib/getFollowingPosts';

export default function FollowingPosts() {
  // staleTime : Fresh -> Stale 로 변경 되는 시간(기본은 0)
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
