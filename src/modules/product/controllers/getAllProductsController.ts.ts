import { productRepository } from "../services";
import { Request, Response } from "express";

const getAllProductsController = async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
    const product = await productRepository.findByName(name as string);
    return res.status(200).send(product);
  }
  const products = await productRepository.list();
  return res.status(200).send(products);
};

export { getAllProductsController };
