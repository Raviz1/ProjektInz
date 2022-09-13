
import express from "express";
import { CarController } from "../../controllers/CarController";
import { verifyToken } from "../../middleware/AuthMiddleware";

const CarRouter = express.Router();

CarRouter.get('/all', CarController.getAllCars)
CarRouter.get('/:id', CarController.getById)


export default CarRouter