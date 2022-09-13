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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail = (email, linkToActivate) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    console.log(process.env.TEST_EMAIL_LOGIN, process.env.TEST_EMAIL_PASS);
    let transporter = nodemailer_1.default.createTransport({
        pool: true,
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.TEST_EMAIL_LOGIN,
            pass: process.env.TEST_EMAIL_PASS, // generated ethereal password
        },
    });
    // send mail with defined transport object
    let info = yield transporter.sendMail({
        from: '"Activate Account" <adrian@raftels.com>',
        to: email,
        subject: "Activate email ✔",
        text: `Click this link to activate account ${linkToActivate}`,
        html: '<a href="' + linkToActivate + '.html">"Activate you account - this link will be active for 10 minutes"</a>',
    });
    console.log("Message sent: %s", info.messageId);
    return info;
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
exports.sendMail = sendMail;
//# sourceMappingURL=SendMail.js.map