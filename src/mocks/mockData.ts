import {faker} from "@faker-js/faker";
import {generateDate} from "@/mocks/util";

export const User = [
  {id: 'jeff', nickname: 'Jeff', image: faker.image.avatar()},
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'},
  {id: 'lostArk', nickname: '로스트아크', image: faker.image.avatar()},
  {id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg'},
]

export function FakerPostRecommends(cursor: number) {

  return [
    {
      postId: cursor + 1,
      User: User[0],
      content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
      createdAt: generateDate(),
    },
    {
      postId: cursor + 2,
      User: User[0],
      content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [
        {imageId: 1, link: faker.image.urlLoremFlickr()},
        {imageId: 2, link: faker.image.urlLoremFlickr()},
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
        {imageId: 1, link: faker.image.urlLoremFlickr()},
        {imageId: 2, link: faker.image.urlLoremFlickr()},
        {imageId: 3, link: faker.image.urlLoremFlickr()},
        {imageId: 4, link: faker.image.urlLoremFlickr()},
      ],
      createdAt: generateDate(),
    },
    {
      postId: cursor + 5,
      User: User[0],
      content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
      Images: [
        {imageId: 1, link: faker.image.urlLoremFlickr()},
        {imageId: 2, link: faker.image.urlLoremFlickr()},
        {imageId: 3, link: faker.image.urlLoremFlickr()},
      ],
      createdAt: generateDate(),
    },
  ]
}


