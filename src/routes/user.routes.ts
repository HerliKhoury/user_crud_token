import { Router } from "express";
import { createUserController, deleteUserByIdController, getUserByIdController, updateUserController } from "../controllers/user.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

export const userRoutes: Router = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.delete("/:id", ensureTokenIsValid, deleteUserByIdController);
userRoutes.patch("/:id", ensureTokenIsValid, updateUserController); 