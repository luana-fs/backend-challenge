import { productRepository } from "../services";
import { Request, Response } from "express";

const findProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await productRepository.findById(Number(id));
  res.status(200).send(product);
};

export { findProductByIdController };
