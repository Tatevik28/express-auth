import BaseController from "./BaseController";
import UserService from "../services/UserService";
import {NextFunction, Request, Response} from "express";


const usersService = new UserService();
class UsersController extends BaseController {
  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const createdUser = await usersService.createUser(req.body);
      super._return(res,createdUser);
    } catch (error) {
      next(error)
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await usersService.login(req.body);
      super._return(res,user);
    } catch (error) {
      next(error)
    }
  }
}

export default new UsersController();
