import { Router } from "express";
import { createUserController } from "../modules/user/controllers/createUserController";
import { findUserByIdController } from "../modules/user/controllers/findUserByIdController";
import { getAllUsersController } from "../modules/user/controllers/getAllUsersController";
import { signUpController } from "../modules/user/controllers/signUpController";

const usersRouter = Router();

usersRouter.get("/", getAllUsersController);
usersRouter.get("/:id", findUserByIdController); //os endpoints que possuem path variables sempre precisam ficar no final...
usersRouter.post("/login", signUpController);
usersRouter.post("/", createUserController);

export default usersRouter;
