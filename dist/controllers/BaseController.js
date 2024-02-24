"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    _return(res, data, status = 200) {
        return res.json({
            message: "Success",
            code: status,
            payload: data,
        });
    }
}
exports.default = BaseController;
