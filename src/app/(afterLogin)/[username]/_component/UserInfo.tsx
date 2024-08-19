'use client';

import style from '@/app/(afterLogin)/[username]/profile.module.css';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/app/(afterLogin)/[username]/_lib/getUser';
import { IUser } from '@/model/IUser';

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const { data: user, error } = useQuery<IUser, Object, IUser, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (!user) {
    return null;
  }

  if (error) {
    return (
      <>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>프로필</h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage} />
          <div className={style.userName}>
            <div>@{username}</div>
          </div>
        </div>
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
          계정이 존재하지 않음
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user?.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}
