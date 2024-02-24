import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";


export default function AuthMiddleware(req: newRequest, res: Response, next: NextFunction): void {
  if (!req.headers?.authorization) {
    return
  }

  const token = req.headers?.authorization.replace("Bearer ", "");
  if (!token) {
    res.status(401);
    return;
  }

  const decoded = jwt.verify(token, 'privateKey');
  if (!decoded) {
    res.status(401);
    return
  }
  req.user = decoded;
  next();
}


export interface newRequest extends Request {
  user?: any;
}
