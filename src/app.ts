import  Express  from "express";
import "express-async-errors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { errorHandler } from "./errors/errorHandler.error";

const app = Express();

app.use(Express.json());
app.use("/user", userRoutes);
app.use("/login", loginRoutes)

app.use(errorHandler)

export default app;