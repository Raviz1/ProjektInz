
import express from "express";
import { UserController } from "../../controllers/UserContoller";
import { verifyToken } from "../../middleware/AuthMiddleware";

const UserRouter = express.Router();

UserRouter.post('/createUser', UserController.createUser)
UserRouter.post('/login', UserController.loginUser)
UserRouter.get('/test', verifyToken, (req, res) => {
    res.send('cacy')
})

export default UserRouter