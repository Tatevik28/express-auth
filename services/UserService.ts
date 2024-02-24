import {IUser} from "../interfaces/user";
import UsersRepository from "../repositories/UsersRepository";

const usersRepository: UsersRepository = new UsersRepository()
export default class UserService {

  async createUser(data: IUser): Promise<IUser> {
    return await usersRepository.createUser(data);
  }

  async login(data: IUser): Promise<IUser> {
    return await usersRepository.login(data);
  }
}
