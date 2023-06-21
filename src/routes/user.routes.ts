import { Router } from "express";
import { createUserController, getUserByIdController } from "../controllers/user.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

export const userRoutes: Router = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id", getUserByIdController)
userRoutes.delete("/:id", ensureTokenIsValid)
userRoutes.patch("/:id", ensureTokenIsValid) 