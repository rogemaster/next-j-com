import Link from 'next/link';
import style from './trand.module.css';
import { IHashTag } from '@/model/IHashTag';

type Props = {
  trend: IHashTag;
};

export default function Trend({ trend }: Props) {
  return (
    <Link href={`/search?q=${trend.title}`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
}
