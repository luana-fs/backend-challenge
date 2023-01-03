import { Router } from "express";
import { createProductController } from "../modules/product/controllers/createProductController";
import { findProductByIdController } from "../modules/product/controllers/findProductByIdController";
import { findProductByNameController } from "../modules/product/controllers/findProductByName";
import { getAllProductsController } from "../modules/product/controllers/getAllProductsController.ts";

const productsRouter = Router();

productsRouter.get("/", getAllProductsController);
productsRouter.get("/search", findProductByNameController);
productsRouter.get("/:id", findProductByIdController);
productsRouter.post("/", createProductController);

export default productsRouter;
