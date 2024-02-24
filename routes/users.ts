import {Router, Response, Request} from "express";
import UsersController from '../controllers/UsersController'
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

router.post('/register', UsersController.createUser);
router.post('/login', UsersController.login);
router.get('/test', AuthMiddleware, function (req: Request, res: Response) {
  res.send("Hello")
})

export default router
