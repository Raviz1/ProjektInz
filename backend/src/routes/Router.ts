import express from "express";
import UserRouter from "./UserRouter/UserRouter";

const router = express.Router();


// router.get('/', (req: express.Request, res: express.Response) => {
//     res.send("Wokring")
// })

router.use('/user', UserRouter)
router.use(express.static('activate'))


export default router