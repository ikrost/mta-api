import express, { Router } from "express";
import { getUser, getAllUsers, updateUser, deleteUser, addUser } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/update/:id", updateUser);
userRouter.get("/get/:id", getUser);
userRouter.get("/getAll", getAllUsers);
userRouter.post("/add", addUser);
userRouter.post("/delete/:id", deleteUser);

export { userRouter };