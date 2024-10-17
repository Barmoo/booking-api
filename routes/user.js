import { Router } from "express";
import{registerUser,loginUser,logoutUser} from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.post('/users/register',registerUser);

userRouter.post('/users/login', loginUser);

userRouter.post('/users/logout',logoutUser);

export default userRouter;