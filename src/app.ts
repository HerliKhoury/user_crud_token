import  Express  from "express";
import { userRoutes } from "./routes/user.routes";

const app = Express();

app.use(Express.json());
app.use("/user",userRoutes);

export default app;