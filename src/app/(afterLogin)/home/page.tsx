import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostRecommends from '@/app/(afterLogin)/home/_component/PostRecommends';
import TabDeciderSuspense from '@/app/(afterLogin)/home/_component/TabDeciderSuspense';
import { Suspense } from 'react';
import Loading from '@/app/(afterLogin)/home/loading';
import { auth } from '@/auth';

export default async function HomePage() {
  const session = await auth();

  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
        <PostRecommends />
      </TabProvider>
    </main>
  );
}
