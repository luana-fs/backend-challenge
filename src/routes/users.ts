import { Router } from "express";
import { createUserController } from "../controllers/createUserController";
import { findUserByEmailController } from "../controllers/findUserByEmailController";
import { findUserByIdController } from "../controllers/findUserByIdController";
import { getAllUsersController } from "../controllers/getAllUsersController";

const usersRouter = Router();

usersRouter.get("/", getAllUsersController);
usersRouter.get("/search", findUserByEmailController);
usersRouter.get("/:id", findUserByIdController); //os endpoins que possuem path variables sempre precisam ficar no final...
usersRouter.post("/", createUserController);

export default usersRouter;
