"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./routes/Router"));
const dotenv = __importStar(require("dotenv")); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const data_source_1 = require("./data-source");
const cors_1 = __importDefault(require("cors"));
const Car_1 = require("./entity/Car");
const Image_1 = require("./entity/Image");
const app = (0, express_1.default)();
app.use(express_1.default.static('activate'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use((0, cors_1.default)());
app.use(Router_1.default);
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const path = require('path');
    app.use('/carImages/', express_1.default.static(path.join(__dirname, 'carImages')));
    // console.log(path.join(__dirname, 'activate'))
    // !!! DEFAULT CARS
    const car = new Car_1.Car();
    car.Colour = "blue";
    car.FuelType = "disel";
    car.MakeYear = new Date(1997);
    car.Model = "Volvo v50";
    const image1 = new Image_1.Image();
    image1.Title = "1";
    image1.Url = "http://localhost:3005/carImages/1/1.jpg";
    yield data_source_1.AppDataSource.manager.save(image1);
    const image2 = new Image_1.Image();
    image2.Title = "2";
    image2.Url = "http://localhost:3005/carImages/1/2.jpeg";
    yield data_source_1.AppDataSource.manager.save(image2);
    car.Images = [image1, image2];
    yield data_source_1.AppDataSource.manager.save(car);
})).catch(error => console.log(error));
app.listen(3005, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3005}`);
});
//# sourceMappingURL=index.js.map