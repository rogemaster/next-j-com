"use client";

import style from '../search.module.css';
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Tab() {
  const [current, setCurrent] = useState<string>('new')
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClickHot = () => {
    setCurrent('hot');
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('f');
    router.replace(`/search?${newSearchParams.toString()}`);

    let url = `/search?q=${searchParams.get('q')}`;
    if (searchParams.has('pf')) {
      url += `&pf=${searchParams.get('pf')}`;
    }
    router.replace(url);
  };
  const onClickNew = () => {
    setCurrent('new');
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('f', 'live');
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  )
}
