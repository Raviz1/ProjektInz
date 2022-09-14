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
exports.ReservationController = void 0;
const data_source_1 = require("../data-source");
const Terminy_1 = require("../entity/Terminy");
const typeorm_1 = require("typeorm");
const terminyRepository = data_source_1.AppDataSource.getRepository(Terminy_1.Terminy);
class ReservationController {
}
exports.ReservationController = ReservationController;
_a = ReservationController;
ReservationController.reserveCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId, userId, dates } = req.body;
        if (!dates || !carId || !userId)
            throw new Error("Data not specified");
        console.log(userId, carId, dates);
        const termin = new Terminy_1.Terminy();
        console.log(dates);
        console.log(new Date(dates[0]));
        termin.DataStart = new Date(dates[0]);
        termin.DataZwrotu = new Date(dates[dates.length - 1]);
        termin.car = carId;
        termin.user = userId;
        terminyRepository.save(termin);
        res.status(200).send("Done");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
ReservationController.userReservations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const zam = yield terminyRepository.find({
            relations: {
                car: {
                    Cennik: true
                },
            },
            where: {
                user: {
                    id: userId
                },
                DataZwrotu: (0, typeorm_1.MoreThan)(new Date())
            }
        });
        res.status(200).send(zam);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
ReservationController.userHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const zam = yield terminyRepository.find({
            relations: {
                car: {
                    Cennik: true
                },
            },
            where: {
                user: {
                    id: userId
                },
                DataStart: (0, typeorm_1.LessThan)(new Date())
            }
        });
        res.status(200).send(zam);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
//# sourceMappingURL=ReservationController.js.map