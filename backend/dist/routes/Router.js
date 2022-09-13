"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("./UserRouter/UserRouter"));
const router = express_1.default.Router();
// router.get('/', (req: express.Request, res: express.Response) => {
//     res.send("Wokring")
// })
router.use('/user', UserRouter_1.default);
router.use(express_1.default.static('activate'));
exports.default = router;
//# sourceMappingURL=Router.js.map