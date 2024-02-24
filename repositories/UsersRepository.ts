import {IUser} from "../interfaces/user";
import {User} from "../users";
import {AppDataSource} from "../index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class UsersRepository {
  public async createUser(data: IUser): Promise<any> {
    let user = new User();
    user.email = data.email;
    user.password = await bcrypt.hash(data.password, 10);
    user.creation_timestamp = Date.now().toString(), user.modification_timestamp = Date.now().toString()
    const usersRepository = AppDataSource.getRepository(User);
    await usersRepository.save(user);
    return user
  }

  public async login(data: IUser): Promise<any> {
    const usersRepository = AppDataSource.getRepository(User);
    const user = await usersRepository.findOneBy({email: data.email});
    if (!user) {
      return
    }
    const isValidPass = await bcrypt.compare(data.password, user.password);

    if (!isValidPass) return
    const token = jwt.sign({userId: user.id}, 'privateKey', { expiresIn: '1h' });

    if (!token) {
      return
    }

    return token
  }
}
