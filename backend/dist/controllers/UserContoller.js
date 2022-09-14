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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("../data-source");
const User_1 = require("../entity/User");
const SendMail_1 = require("../assets/SendMail");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
class UserController {
}
exports.UserController = UserController;
_a = UserController;
UserController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, email, password } = req.body;
    if (!(login && email && password)) {
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    // new user
    const user = new User_1.User();
    user.Login = login;
    user.Email = email;
    const salt = yield bcrypt_1.default.genSalt(10);
    user.Password = yield bcrypt_1.default.hash(password, salt);
    user.isActive = true;
    const hash = crypto_1.default.randomBytes(15).toString('hex');
    user.userHash = hash;
    // find if there is one with this email or login 
    const ifUser = userRepository.find({
        where: [
            { Login: login },
            { Email: email },
        ],
    });
    ifUser.then((users) => {
        if (users.length != 0) {
            throw new Error("There already exist user with this login or email");
        }
        const token = jsonwebtoken_1.default.sign({ email: email }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
        });
        user.Token = token;
        userRepository.save(user);
        // console.log(`http://localhost:3005/activate/${hash}`)
        // create a file for 10 minutes
        (0, SendMail_1.sendMail)(email, `http://localhost:3005/activate/${hash}`);
        res.status(200).send({
            message: "User Created"
        });
    }).catch((reason) => {
        res.status(400).send({ error: reason.message });
    });
});
UserController.loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = yield userRepository.findOneBy({
            Email: email,
        });
        if (user && (yield bcrypt_1.default.compare(password, user.Password))) {
            // Create token
            const token = jsonwebtoken_1.default.sign({ email }, process.env.TOKEN_KEY, {
                expiresIn: "2h",
            });
            user.Token = token;
            // save user token
            yield userRepository.save(user);
            // user
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        console.log(err);
    }
    // Our register logic ends here
});
//# sourceMappingURL=UserContoller.js.map