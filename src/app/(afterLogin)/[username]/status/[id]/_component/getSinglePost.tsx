import { useQuery } from '@tanstack/react-query';
import { IPost } from '@/model/IPost';
import Post from '@/app/(afterLogin)/_component/Post';
import {getSinglePost} from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";

type Props = {
  id: string;
  noImage?: boolean;
};

export default function SinglePost({ id, noImage }: Props) {
  const { data: post, error } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (error) {
    return (
      <div
        style={{
          fontSize: 31,
          fontWeight: 'bold',
          justifyContent: 'center',
          display: 'flex',
          height: 100,
          alignItems: 'center',
        }}
      >
        게시글을 찾을 수 없습니다.
      </div>
    );
  }
  if (!post) {
    return null;
  }
  return <Post key={post.postId} post={post} noImage={noImage} />;
}
