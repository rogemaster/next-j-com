interface IUserID {
  id: string;
}

export interface IUser {
  id: string;
  nickname: string;
  image: string;
  Followers: IUserID[];
  _count: {
    Followers: number;
    Followings: number;
  }
}