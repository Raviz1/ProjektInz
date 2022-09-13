"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserContoller_1 = require("../../controllers/UserContoller");
const UserRouter = express_1.default.Router();
UserRouter.post('/createUser', UserContoller_1.UserController.createUser);
UserRouter.post('/login', UserContoller_1.UserController.loginUser);
// UserRouter.get('/test', verifyToken, (req, res) => {
//     res.send('cacy')
// })
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map