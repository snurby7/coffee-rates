import { Request } from 'express';

export interface IRequest<T = {}> extends Request {
  /**
   * @description This is meant to give some type safety around the 'body' of the Request
   * @memberof IRequest
   */
  body: T;
}
