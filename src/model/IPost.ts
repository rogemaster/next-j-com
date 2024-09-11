import { IPostImage } from '@/model/IPostImage';
import { IUser } from '@/model/IUser';

interface IUserID {
  userId: string;
}

export interface IPost {
  postId: number;
  User: IUser;
  content: string;
  createdAt: Date;
  Images: IPostImage[];
  Hearts: IUserID[];
  Reposts: IUserID[];
  Comments: IUserID[];
  _count: {
    Hearts: number;
    Reposts: number;
    Comments: number;
  };
}
