import {Response} from "express";

export interface BaseResponseInterface<T = any> {
  message: string;
  code: number;
  payload: T;
}

export default class BaseController {
  protected _return<T = any>(res: Response, data: T, status: number = 200): Response<BaseResponseInterface<T>> {
    return res.json({
      message: "Success",
      code: status,
      payload: data,
    });
  }
}
