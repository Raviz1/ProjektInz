"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ReservationController_1 = require("../../controllers/ReservationController");
const ReservationRouter = express_1.default.Router();
ReservationRouter.post('/reserve', ReservationController_1.ReservationController.reserveCar);
ReservationRouter.post('/all', ReservationController_1.ReservationController.userReservations);
ReservationRouter.post('/allHistory', ReservationController_1.ReservationController.userHistory);
exports.default = ReservationRouter;
//# sourceMappingURL=ReservationRouter.js.map