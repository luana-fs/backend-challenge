import { productRepository } from "../services";
import { Request, Response } from "express";

const findProductByNameController = async (req: Request, res: Response) => {
  const { name } = req.query;
  const product = await productRepository.findByName(name as string);
  res.status(200).send(product);
};

export { findProductByNameController };
