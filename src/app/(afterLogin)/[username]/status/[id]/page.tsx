import style from './singlePost.module.css';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/getSinglePost';
import {dehydrate, HydrationBoundary, useQueryClient} from "@tanstack/react-query";
import {getSinglePost} from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import {getComments} from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/Comments";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const queryClient = useQueryClient();
  await queryClient.prefetchQuery({queryKey: ['posts', id],  queryFn: getSinglePost});
  await queryClient.prefetchQuery({queryKey: ['posts', id, 'comments'],  queryFn: getComments});
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} noImage />
        <CommentForm id={id} />
        <div>
          <Comments id={id}/>
        </div>
      </HydrationBoundary>
    </div>
  );
}
