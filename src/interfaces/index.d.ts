export interface ICategory {
  id: number;
  title: string;
}
export interface IPost {
  id: number;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: { id: number };
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
  birthday: string;
  skills: string[];
  avatar: [{ uid: string; url: string }];
}
