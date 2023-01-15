import { Router } from "express";
import { createProductController } from "../modules/product/controllers/createProductController";
import { deleteProductController } from "../modules/product/controllers/deleteProductController";
import { editProductController } from "../modules/product/controllers/editProductController";
import { findProductByIdController } from "../modules/product/controllers/findProductByIdController";
import { getAllProductsController } from "../modules/product/controllers/getAllProductsController.ts";

const productsRouter = Router();

productsRouter.get("/", getAllProductsController);
productsRouter.get("/:id", findProductByIdController);
productsRouter.post("/", createProductController);
productsRouter.put("/:id", editProductController);
productsRouter.delete("/:id", deleteProductController);

export default productsRouter;
