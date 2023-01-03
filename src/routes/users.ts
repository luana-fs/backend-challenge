import { Router } from "express";
import { createUserController } from "../controllers/createUserController";
import { findUserByEmailController } from "../controllers/findUserByEmailController";
import { findUserByIdController } from "../controllers/findUserByIdController";
import { getAllUsersController } from "../controllers/getAllUsersController";

//aqui instancia o UserRepository. Só pode instanciar uma vez se nao toda vez ele vai criar o constructor do zero.

const usersRouter = Router();

usersRouter.get("/", getAllUsersController);

usersRouter.get("/search", findUserByEmailController);

//os endpoins que possuem path variables sempre precisam ficar no final...
usersRouter.get("/:id", findUserByIdController);

usersRouter.post("/", createUserController);

export default usersRouter;
