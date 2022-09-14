
import express from "express";
import { ReservationController } from "../../controllers/ReservationController";

const ReservationRouter = express.Router();

ReservationRouter.post('/reserve', ReservationController.reserveCar)
ReservationRouter.post('/all', ReservationController.userReservations)
ReservationRouter.post('/allHistory', ReservationController.userHistory)

export default ReservationRouter