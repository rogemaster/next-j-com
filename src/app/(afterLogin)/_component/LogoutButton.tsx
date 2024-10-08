'use client';

import style from './logoutButton.module.css';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Session } from '@auth/core/types';
import {useQueryClient} from "@tanstack/react-query";

type Props = {
  me: Session;
};

export default function LogoutButton({ me }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  if (!me?.user) {
    return null;
  }

  const onLogout = () => {
    queryClient.invalidateQueries({
      queryKey: ['post']
    });
    queryClient.invalidateQueries({
      queryKey: ['users']
    });
    signOut({ redirect: false }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
        credentials: 'include',
        method: 'post'
      })
      router.replace('/');
    });
  };

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
