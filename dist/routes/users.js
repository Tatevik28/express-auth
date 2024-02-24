"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const AuthMiddleware_1 = __importDefault(require("../middlewares/AuthMiddleware"));
const router = (0, express_1.Router)();
router.post('/register', UsersController_1.default.createUser);
router.post('/login', UsersController_1.default.login);
router.get('/test', AuthMiddleware_1.default, function (req, res) {
    res.send("Hello");
});
exports.default = router;
