import { faker } from '@faker-js/faker';
import { generateDate } from '@/mocks/util';
import { IHashTag } from '@/model/IHashTag';

export const User = [
  { id: 'jeff', nickname: 'Jeff', image: faker.image.avatar() },
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'lostArk', nickname: '로스트아크', image: faker.image.avatar() },
  { id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg' },
];

export function FakerPostRecommends(cursor: number) {
  return [
    {
      postId: cursor + 1,
      User: User[0],
      content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    },
    {
      postId: cursor + 2,
      User: User[0],
      content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: cursor + 3,
      User: User[0],
      content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [],
      createdAt: generateDate(),
    },
    {
      postId: cursor + 4,
      User: User[0],
      content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
        { imageId: 4, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: cursor + 5,
      User: User[0],
      content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
  ];
}

export function FakerFollowingPosts() {
  return [
    {
      postId: 1,
      User: User[0],
      content: `${1} Stop following me. I'm too famous`,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    },
    {
      postId: 2,
      User: User[0],
      content: `${2} Stop following me. I'm too famous`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 3,
      User: User[0],
      content: `${3} Stop following me. I'm too famous`,
      Images: [],
      createdAt: generateDate(),
    },
    {
      postId: 4,
      User: User[0],
      content: `${4} Stop following me. I'm too famous`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
        { imageId: 4, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 5,
      User: User[0],
      content: `${5} Stop following me. I'm too famous`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
  ];
}

export function FakerSearchResult(tag: string | readonly string[]) {
  return [
    {
      postId: 1,
      User: User[0],
      content: `${1} 검색결과 ${tag}`,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    },
    {
      postId: 2,
      User: User[0],
      content: `${2} 검색결과 ${tag}`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 3,
      User: User[0],
      content: `${3} 검색결과 ${tag}`,
      Images: [],
      createdAt: generateDate(),
    },
    {
      postId: 4,
      User: User[0],
      content: `${4} 검색결과 ${tag}`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
        { imageId: 4, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 5,
      User: User[0],
      content: `${5} 검색결과 ${tag}`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
  ];
}

export function FakerUserPosts(userId: string | readonly string[]) {
  return [
    {
      postId: 1,
      User: User[0],
      content: `${1} ${userId}의 게시글`,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    },
    {
      postId: 2,
      User: User[0],
      content: `${2} ${userId}의 게시글`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 3,
      User: User[0],
      content: `${3} ${userId}의 게시글`,
      Images: [],
      createdAt: generateDate(),
    },
    {
      postId: 4,
      User: User[0],
      content: `${4} ${userId}의 게시글`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
        { imageId: 4, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 5,
      User: User[0],
      content: `${5} ${userId}의 게시글`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
  ];
}

export function FakerUserPostsComments(postId: string | readonly string[]) {
  return [
    {
      postId: 1,
      User: User[0],
      content: `${1} 게시글 ${postId}의 답글`,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    },
    {
      postId: 2,
      User: User[0],
      content: `${2} 게시글 ${postId}의 답글`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 3,
      User: User[0],
      content: `${3} 게시글 ${postId}의 답글`,
      Images: [],
      createdAt: generateDate(),
    },
    {
      postId: 4,
      User: User[0],
      content: `${4} 게시글 ${postId}의 답글`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
        { imageId: 4, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
    {
      postId: 5,
      User: User[0],
      content: `${5} 게시글 ${postId}의 답글`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    },
  ];
}

export function FakerTrend(): IHashTag[] {
  return [
    { tagId: 1, title: '니나브', count: 12345 },
    { tagId: 2, title: '실리안', count: 4345 },
    { tagId: 3, title: '바운투르', count: 345 },
    { tagId: 4, title: '아브렐슈드', count: 1345 },
    { tagId: 5, title: '카단', count: 2345 },
    { tagId: 6, title: '카멘', count: 8754 },
    { tagId: 7, title: '에아달린', count: 9345 },
    { tagId: 8, title: '에키드나', count: 42345 },
  ];
}
