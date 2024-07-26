import {http, HttpResponse} from 'msw';
import {faker} from "@faker-js/faker";
import {FakerPostRecommends, User} from "@/mocks/mockData";

export const handlers = [
  // 호출 api
  http.post('/api/login', () => {
    // 응답부분
    return HttpResponse.json(User[0], {
        headers: { 'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/' }
      }
    )
  }),
  http.post('/api/logout', () => {
    // 보낼 데이터가 없을 경우
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
  http.post('/api/logout', async () => {
    // 텍스트를 응답으로 보내는 경우
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: { 'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0' }
    });

    // status 를 변경해서 보내는 경우
    // return HttpResponse.text(JSON.stringify('ok'), {
    //   status: 403
    // });
  }),
  http.get('/api/postRecommends', ({request}) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    return HttpResponse.json(FakerPostRecommends(cursor));
  }),
]