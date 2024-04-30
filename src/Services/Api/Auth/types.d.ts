export interface ILoginReq {
  email: string;
  password: string;
}

export interface ILoginRes {
  _id: string;
  authToken: string;
}