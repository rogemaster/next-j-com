import {IPostImage} from "@/model/IPostImage";
import {IUser} from "@/model/IUser";

export interface IPost {
  postId: number;
  User: IUser;
  content: string;
  createdAt: Date;
  Images: IPostImage[];
}