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
const BaseController_1 = __importDefault(require("./BaseController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const usersService = new UserService_1.default();
class UsersController extends BaseController_1.default {
    createUser(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield usersService.createUser(req.body);
                _super._return.call(this, res, createdUser);
            }
            catch (error) {
                next(error);
            }
        });
    }
    login(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield usersService.login(req.body);
                _super._return.call(this, res, user);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UsersController();
