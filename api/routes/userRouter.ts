import express, { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/update/:id", userController.updateUser.bind(userController));
userRouter.get("/get/:id", userController.getUser.bind(userController));
userRouter.get("/getAll", userController.getAllUsers.bind(userController));
userRouter.post("/add", userController.addUser.bind(userController));
userRouter.post("/delete/:id", userController.deleteUser.bind(userController));

export { userRouter };