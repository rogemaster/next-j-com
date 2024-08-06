"use client"

import Trend from '@/app/(afterLogin)/_component/Trend';
import { useQuery } from '@tanstack/react-query';
import { IHashTag } from '@/model/IHashTag';
import { getTrends } from '@/app/(afterLogin)/_lib/getTrends';

export default function TrendSection() {
  const { data } = useQuery<IHashTag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
  });

  return data && data.map((item) => <Trend key={item.tagId} trend={item} />);
}
