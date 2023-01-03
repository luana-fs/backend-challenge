import { Router } from "express";
import { createUserController } from "../modules/user/controllers/createUserController";
import { findUserByEmailController } from "../modules/user/controllers/findUserByEmailController";
import { findUserByIdController } from "../modules/user/controllers/findUserByIdController";
import { getAllUsersController } from "../modules/user/controllers/getAllUsersController";

const usersRouter = Router();

usersRouter.get("/", getAllUsersController);
usersRouter.get("/search", findUserByEmailController);
usersRouter.get("/:id", findUserByIdController); //os endpoins que possuem path variables sempre precisam ficar no final...
usersRouter.post("/", createUserController);

export default usersRouter;
