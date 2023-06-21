import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

export const userRoutes: Router = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id",)
userRoutes.delete("/:id", ensureTokenIsValid)
userRoutes.patch("/:id", ensureTokenIsValid) 