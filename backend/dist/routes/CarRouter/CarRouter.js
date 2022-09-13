"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarController_1 = require("../../controllers/CarController");
const CarRouter = express_1.default.Router();
CarRouter.get('/all', CarController_1.CarController.getAllCars);
CarRouter.get('/:id', CarController_1.CarController.getById);
exports.default = CarRouter;
//# sourceMappingURL=CarRouter.js.map