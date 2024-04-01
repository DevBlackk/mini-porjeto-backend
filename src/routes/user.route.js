import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const userRoute = Router();
const user = new UserController();

userRoute.post("/user", user.createUser);
userRoute.get("/user", user.getAllUser);
userRoute.delete("/user/:id", user.deleteUser);
userRoute.put("/user/:id", user.updateUser);


export default userRoute;