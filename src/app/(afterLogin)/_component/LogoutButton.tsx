'use client';

import style from './logoutButton.module.css';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Session } from '@auth/core/types';

type Props = {
  me: Session;
};

export default function LogoutButton({ me }: Props) {
  const router = useRouter();

  if (!me?.user) {
    return null;
  }

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
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
