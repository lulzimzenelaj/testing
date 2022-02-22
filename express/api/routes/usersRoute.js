import express from "express";
import UserController from "../Controllers/UserController";
import checkIfAdmin from "../middlewares/checkIfAdmin"

const userRouter = express.Router();

userRouter.post('/register',UserController.register ); 

//routa ne te cilt mujn me pas qasje veq adminat
// userRouter.use(checkIfAdmin);
// userRouter.get("/list",UserController.list);

export default userRouter; 