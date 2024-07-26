"use server"

import {redirect} from "next/navigation";
import {signIn} from "@/auth";

type IPrev = {message: string | null};

export default async (prevState: IPrev, formData: FormData) => {
  // use server 선언한 함수 로직은 클라이언트에 노출 되지 않는다.

  // formData 검증
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return {message: 'no_id'};
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return {message: 'no_name'};
  }
  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return {message: 'no_password'};
  }
  if (!formData.get('image') || !(formData.get('image') as string)) {
    return {message: 'no_image'};
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/signup`, {
      method: "POST",
      body: formData,
      credentials: 'include'
    });

    if (response.status === 403) {
      return {message: 'user_exists'};
    }
    shouldRedirect = true;
    await signIn('credentials', {
      username: formData.get('id'),
      password: formData.get('password'),
      redirect: false
    })
  } catch (error) {
    console.log(error);
    return {message: null};
  }

  if (shouldRedirect) {
    redirect('/home');
  }

  return {message: null};
}