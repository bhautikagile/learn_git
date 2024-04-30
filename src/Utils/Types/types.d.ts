export interface IApiSuccess<T> {
  data: T;
  statusCode?: number;
  message?: string;
}