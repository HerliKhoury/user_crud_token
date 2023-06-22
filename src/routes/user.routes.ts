import { Router } from "express";
import { createUserController, deleteUserByIdController, getUserByIdController, updateUserByIdController } from "../controllers/user.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

export const userRoutes: Router = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.delete("/:id", ensureTokenIsValid, deleteUserByIdController);
userRoutes.patch("", ensureTokenIsValid, updateUserByIdController); 