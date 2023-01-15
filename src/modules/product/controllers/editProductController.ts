import { Request, Response } from "express";
import { editProductService } from "../services";

const editProductController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, barCode, category } = req.body;
    const auth = req.headers.auth as string;

    const product = await editProductService.execute({
      id,
      auth,
      name,
      barCode,
      category,
    });
    return res.status(200).send({ product });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export { editProductController };
