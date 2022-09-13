import express from "express";
import CarRouter from "./CarRouter/CarRouter";
import UserRouter from "./UserRouter/UserRouter";

const router = express.Router();


// router.get('/', (req: express.Request, res: express.Response) => {
//     res.send("Wokring")
// })

router.use('/user', UserRouter)
router.use('/cars', CarRouter)
router.use(express.static('activate'))


export default router