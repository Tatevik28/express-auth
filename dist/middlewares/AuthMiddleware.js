"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    var _a, _b;
    if (!((_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization)) {
        return;
    }
    const token = (_b = req.headers) === null || _b === void 0 ? void 0 : _b.authorization.replace("Bearer ", "");
    if (!token) {
        res.status(401);
        return;
    }
    const decoded = jsonwebtoken_1.default.verify(token, 'privateKey');
    if (!decoded) {
        res.status(401);
        return;
    }
    req.user = decoded;
    next();
}
exports.default = AuthMiddleware;
