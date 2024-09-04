import { useQuery, useQueryClient } from '@tanstack/react-query';
import { IPost } from '@/model/IPost';
import Post from '@/app/(afterLogin)/_component/Post';
import { getUserPosts } from '@/app/(afterLogin)/[username]/_lib/getUserPosts';

type Props = {
  username: string;
};

export default function UserPosts({ username }: Props) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users', username]);
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, string]>({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (user) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
  return null;
}
