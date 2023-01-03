import { Request, Response, Router } from "express";
import { ProductRepository } from "../repositories/implementations/ProductRepository";
import { CreateProductService } from "../services/CreateProductService";

//aqui instancia o UserRepository. Só pode instanciar uma vez se nao toda vez ele vai criar o constructor do zero.
const productRepository = new ProductRepository();
const createProductService = new CreateProductService(productRepository);

const productsRouter = Router();

productsRouter.get("/", async (req: Request, res: Response) => {
  const products = await productRepository.list();
  res.status(200).send(products);
});

productsRouter.get("/search", async (req: Request, res: Response) => {
  const { name } = req.query;
  const product = await productRepository.findByName(name as string);
  res.status(200).send(product);
});

productsRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await productRepository.findById(Number(id));
  res.status(200).send(product);
});

productsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, barCode, createdBy, category } = req.body;
    await createProductService.execute({ name, barCode, createdBy, category });
    res.status(201).send({ message: "Produto criado com sucesso" });
  } catch (err) {
    console.log(err);
    return res.status(404).send(err);
  }
});

export default productsRouter;
