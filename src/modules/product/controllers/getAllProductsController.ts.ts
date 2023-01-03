import { productRepository } from "../services";
import { Request, Response } from "express";

const getAllProductsController = async (req: Request, res: Response) => {
  const products = await productRepository.list();
  res.status(200).send(products);
};

export { getAllProductsController };
