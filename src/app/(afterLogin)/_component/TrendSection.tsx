'use client';

import style from './trendSection.module.css';
import Trend from '@/app/(afterLogin)/_component/Trend';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '@/app/(afterLogin)/_lib/getTrends';
import { IHashTag } from '@/model/IHashTag';

export default function TrendSection() {
  const pathName = usePathname();
  const { data: session } = useSession();

  const { data } = useQuery<IHashTag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    enabled: !!session?.user,
  });

  if (pathName === '/explore') return null;
  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data && data.map((item) => <Trend key={item.tagId} trend={item} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
}
