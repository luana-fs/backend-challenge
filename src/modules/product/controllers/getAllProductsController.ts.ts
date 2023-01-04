import { productRepository } from "../services";
import { Request, Response } from "express";

const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    if (name) {
      const product = await productRepository.findByName(name as string);
      return res.status(200).send(product);
    }
    const products = await productRepository.list();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { getAllProductsController };
