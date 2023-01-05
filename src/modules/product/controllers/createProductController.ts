import { createProductService } from "../services";
import { Request, Response } from "express";

const createProductController = async (req: Request, res: Response) => {
  try {
    const { name, barCode, createdBy, category } = req.body;
    const auth = req.headers.auth as string;
    await createProductService.execute({
      name,
      barCode,
      createdBy,
      category,
      auth,
    });
    res.status(201).send({ message: "Produto criado com sucesso" });
  } catch (err) {
    console.log(err);
    return res.status(404).send(err);
  }
};

export { createProductController };
