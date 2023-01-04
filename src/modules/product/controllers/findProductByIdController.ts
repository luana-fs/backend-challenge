import { productRepository } from "../services";
import { Request, Response } from "express";

const findProductByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productRepository.findById(Number(id));
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { findProductByIdController };
