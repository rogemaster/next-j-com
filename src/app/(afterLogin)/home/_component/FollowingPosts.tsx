'use client';

import { useQuery } from '@tanstack/react-query';
import Post from '@/app/(afterLogin)/_component/Post';
import { IPost } from '@/model/IPost';
import { getFollowingPosts } from '@/app/(afterLogin)/home/_lib/getFollowingPosts';
import style from "@/app/(afterLogin)/home/home.module.css";

export default function FollowingPosts() {
  // staleTime : Fresh -> Stale 로 변경 되는 시간(기본은 0)
  const { data, isPending } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
  });

  if (isPending) {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <svg className={style.loader} height="100%" viewBox="0 0 32 32" width={40}>
          <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4"
                  style={{stroke: 'rgb(29, 155, 240)', opacity: 0.2}}></circle>
          <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4"
                  style={{stroke: 'rgb(29, 155, 240)', strokeDasharray: 80, strokeDashoffset: 60}}></circle>
        </svg>
      </div>
    )
  }

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
