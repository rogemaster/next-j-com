import {http, HttpResponse} from 'msw';
import {
  FakerFollowingPosts,
  FakerPostRecommends,
  FakerSearchResult,
  FakerTrend,
  FakerUserPosts,
  FakerUserPostsComments,
  User,
} from '@/mocks/mockData';
import { faker } from '@faker-js/faker';
import { generateDate } from '@/mocks/util';

// 3초 후 호출 -> loading 확인을 위해 만듬
const delay = (me: any) => new Promise((res, rej) => {
  setTimeout(res, me);
})

export const handlers = [
  // 호출 api
  http.post('/api/login', () => {
    // 응답부분
    return HttpResponse.json(User[0], {
      headers: { 'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/' },
    });
  }),
  http.post('/api/logout', () => {
    // 보낼 데이터가 없을 경우
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.post('/api/logout', async () => {
    // 텍스트를 응답으로 보내는 경우
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: { 'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0' },
    });

    // status 를 변경해서 보내는 경우
    // return HttpResponse.text(JSON.stringify('ok'), {
    //   status: 403
    // });
  }),
  http.get(`/api/postRecommends}`, ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    return HttpResponse.json(FakerPostRecommends(cursor));
  }),
  http.get('/api/followingPosts', async ({ request }) => {
    await delay(3000); //
    return HttpResponse.json(FakerFollowingPosts());
  }),
  http.get('/api/search/:tag', ({ request, params }) => {
    const { tag } = params;
    return HttpResponse.json(FakerSearchResult(tag));
  }),
  http.get('/api/users/:userId/posts', ({ request, params }) => {
    const { userId } = params;
    return HttpResponse.json(FakerUserPosts(userId));
  }),
  http.get('/api/users/:userId', ({ request, params }) => {
    const { userId } = params;
    const found = User.find((value) => value === params);
    if (found) {
      return HttpResponse.json(User[1]);
    } else {
      return HttpResponse.json({ message: 'no_such_user' }, { status: 404 });
    }
  }),
  http.get('/api/posts/:postId', ({ request, params }) => {
    const { postId } = params;
    return HttpResponse.json({
      postId: 6,
      User: User[0],
      content: `${1} 게시글 아이디 ${postId}의 내용`,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    });
  }),
  http.get('/api/posts/:postId/comments', ({ request, params }) => {
    const { postId } = params;
    return HttpResponse.json(FakerUserPostsComments(postId));
  }),
  http.get('/api/followRecommends', () => {
    return HttpResponse.json(User);
  }),
  http.get('/api/trends', () => {
    return HttpResponse.json(FakerTrend);
  }),
];
