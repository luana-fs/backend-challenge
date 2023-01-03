import { Router } from "express";
import { createProductController } from "../controllers/createProductController";
import { findProductByIdController } from "../controllers/findProductByIdController";
import { findProductByNameController } from "../controllers/findProductByName";
import { getAllProductsController } from "../controllers/getAllProductsController.ts";

const productsRouter = Router();

productsRouter.get("/", getAllProductsController);
productsRouter.get("/search", findProductByNameController);
productsRouter.get("/:id", findProductByIdController);
productsRouter.post("/", createProductController);

export default productsRouter;
