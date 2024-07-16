import {http, HttpResponse} from 'msw';
import {faker} from "@faker-js/faker";

const User = [
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'},
  {id: 'lostArk', nickname: '로스트아크', image: faker.image.avatar()},
  {id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg'},
]

export const handlers = [
  // 호출 api
  http.post('/api/login', () => {
    // 응답부분
    console.log('로그인');
    return HttpResponse.json(User[0], {
        headers: { 'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/' }
      }
    )
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
  http.post('/api/logout', async () => {
    console.log('회원가입');
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: { 'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0' }
    });
  }),
]