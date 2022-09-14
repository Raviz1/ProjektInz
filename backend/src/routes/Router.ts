import express from "express";
import CarRouter from "./CarRouter/CarRouter";
import ReservationRouter from "./ReservationRouter/ReservationRouter";
import UserRouter from "./UserRouter/UserRouter";
import { verifyToken } from "../middleware/AuthMiddleware";

const router = express.Router();


// router.get('/', (req: express.Request, res: express.Response) => {
//     res.send("Wokring")
// })

router.use('/user', UserRouter)
router.use('/cars', CarRouter)
router.use('/reservation', verifyToken, ReservationRouter)
router.use(express.static('activate'))


export default router