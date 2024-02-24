"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users");
const index_1 = require("../index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsersRepository {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = new users_1.User();
            user.email = data.email;
            user.password = yield bcrypt_1.default.hash(data.password, 10);
            user.creation_timestamp = Date.now().toString(), user.modification_timestamp = Date.now().toString();
            const usersRepository = index_1.AppDataSource.getRepository(users_1.User);
            yield usersRepository.save(user);
            return user;
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = index_1.AppDataSource.getRepository(users_1.User);
            const user = yield usersRepository.findOneBy({ email: data.email });
            if (!user) {
                return;
            }
            const isValidPass = yield bcrypt_1.default.compare(data.password, user.password);
            if (!isValidPass)
                return;
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'privateKey', { expiresIn: '1h' });
            if (!token) {
                return;
            }
            return token;
        });
    }
}
exports.default = UsersRepository;
