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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const data_source_1 = require("../data-source");
const Car_1 = require("../entity/Car");
const carRepository = data_source_1.AppDataSource.getRepository(Car_1.Car);
class CarController {
}
exports.CarController = CarController;
_a = CarController;
CarController.getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /// all cars with 1st image
        const cars = yield carRepository.find({
            relations: {
                Images: true
            }
        });
        res.status(200).send({
            cars
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
});
CarController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(req.params.id);
        const car = yield carRepository.find({
            relations: {
                Images: true,
                Lents: true,
            },
            where: {
                id: +id
            }
        });
        if (!car) {
            throw new Error("There is no car");
        }
        res.status(200).send({
            car
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
});
//# sourceMappingURL=CarController.js.map