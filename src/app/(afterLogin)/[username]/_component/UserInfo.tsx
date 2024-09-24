'use client';

import { MouseEventHandler } from 'react';
import cx from 'classnames';
import style from '@/app/(afterLogin)/[username]/profile.module.css';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser } from '@/app/(afterLogin)/[username]/_lib/getUser';
import { IUser } from '@/model/IUser';
import {Session} from "@auth/core/types";

type Props = {
  username: string;
  session: Session | null;
};

export default function UserInfo({ username, session }: Props) {
  const queryClient = useQueryClient();
  const { data: user, error } = useQuery<IUser, Object, IUser, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const follow = useMutation({
    mutationFn: (userId) => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`, {
        credentials: 'include',
        method: 'post',
      });
    },
    onMutate: (userId: string) => {
      const value: IUser[] | undefined = queryClient.getQueryData(['users', 'followRecommends']);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: [{ id: session?.user?.email as string }],
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count.Followers + 1,
            },
          };
          queryClient.setQueryData(['users', 'followRecommends'], shallow);
        }
      }

      const value2: IUser | undefined = queryClient.getQueryData(['users', userId]);
      if (value2) {
        const shallow: IUser = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...value2._count,
            Followers: value2._count.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', userId], shallow);
      }
    },
    onError(error, userId: string) {
      const value: IUser[] | undefined = queryClient.getQueryData(['users', 'followRecommends']);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: shallow[index].Followers.filter((v) => v.id !== session?.user?.email),
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(['users', 'followRecommends'], shallow);
        }
      }

      const value2: IUser | undefined = queryClient.getQueryData(['users', userId]);
      if (value2) {
        const shallow: IUser = {
          ...value2,
          Followers: value2.Followers.filter((v) => v.id !== session?.user?.email),
          _count: {
            ...value2._count,
            Followers: value2._count.Followers - 1,
          },
        };
        queryClient.setQueryData(['users', userId], shallow);
      }
    },
  });

  const unFollow = useMutation({
    mutationFn: (userId) => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`, {
        credentials: 'include',
        method: 'delete',
      });
    },
    onMutate: (userId: string) => {
      const value: IUser[] | undefined = queryClient.getQueryData(['users', 'followRecommends']);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: shallow[index].Followers.filter((v) => v.id !== session?.user?.email),
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(['users', 'followRecommends'], shallow);
        }
      }

      const value2: IUser | undefined = queryClient.getQueryData(['users', userId]);
      if (value2) {
        const shallow: IUser = {
          ...value2,
          Followers: value2.Followers.filter((v) => v.id !== session?.user?.email),
          _count: {
            ...value2._count,
            Followers: value2._count.Followers - 1,
          },
        };
        queryClient.setQueryData(['users', userId], shallow);
      }
    },
    onError(error, userId: string) {
      const value: IUser[] | undefined = queryClient.getQueryData(['users', 'followRecommends']);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: [{ id: session?.user?.email as string }],
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count.Followers + 1,
            },
          };
          queryClient.setQueryData(['users', 'followRecommends'], shallow);
        }
      }

      const value2: IUser | undefined = queryClient.getQueryData(['users', userId]);
      if (value2) {
        const shallow: IUser = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...value2._count,
            Followers: value2._count.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', userId], shallow);
      }
    },
  });

  if (!user) {
    return null;
  }

  const followed = user.Followers.find((v) => v.id === session?.user?.email);

  const onFollow: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (followed) {
      unFollow.mutate(user.id);
    } else {
      follow.mutate(user.id);
    }
  };

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
        <div className={style.userRow}>
          <div className={style.userImage}>
            <img src={user?.image} alt={user.id} />
          </div>
          <div className={style.userName}>
            <div>{user.nickname}</div>
            <div>@{user.id}</div>
          </div>
          {user.id !== session?.user?.email && (
            <button className={cx(style.followButton, followed && style.followed)} onClick={onFollow}>
              {followed ? '팔로잉' : '팔로우'}
            </button>
          )}
        </div>
        <div className={style.userFollower}>
          <div>{user._count.Followers} 팔로워</div>
          &nbsp;
          <div>{user._count.Followings} 팔로우 중</div>
        </div>
      </div>
    </>
  );
}
