"use server"

import {redirect} from "next/navigation";

export default async (prevState: {message: string | null}, formData: FormData) => {
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
  if (!formData.get('image') || !(formData.get('image') as string)?.trim()) {
    return {message: 'no_image'};
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, {
      method: "POST",
      body: formData,
      credentials: 'include'
    });

    if (response.status === 403) {
      return {message: 'user_exists'};
    }
    shouldRedirect = true;
    console.log(response.status);
    console.log(await response.json());
  } catch (error) {
    console.log(error);
    return {message: null};
  }

  if (shouldRedirect) {
    redirect('/home');
  }

  return {message: null};
}