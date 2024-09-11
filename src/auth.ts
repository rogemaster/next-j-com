import NextAuth from 'next-auth';
import Credentials from '@auth/core/providers/credentials';
import { cookies } from 'next/headers';
import cookie from 'cookie';

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });

        let setCookie = authResponse.headers.get('Set-Cookie');
        console.log('set-cookie', setCookie);

        if (setCookie) {
          const parsed = cookie.parse(setCookie);
          cookies().set('connect.sid', parsed['connect.sid'], parsed); // 브라우저에 쿠키를 심어주는 것
        }

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log('user', user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
