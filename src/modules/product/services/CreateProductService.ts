import { verifyToken } from "../../../utils/JWTGenerator";
import { ProductRepository } from "../repositories/implementations/ProductRepository";

interface IRequest {
  auth: string;
  id?: string;
  name: string;
  barCode: string;
  createdBy: number;
  category: number;
}

//a camada services não pode conhecer a api (res.status.send), por isso, usamos o throw new Error.
class CreateProductService {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    auth,
    name,
    barCode,
    createdBy,
    category,
  }: IRequest): Promise<void> {
    if (!name) {
      throw new Error("name property is missing");
    }

    if (!barCode) {
      throw new Error("barCode property is missing");
    }

    if (!createdBy) {
      throw new Error("createdBy property is missing");
    }

    if (!category) {
      throw new Error("category property is missing");
    }

    if (!auth) {
      throw new Error("Token in missing");
    }

    const isTokenValid = verifyToken(auth);

    if (isTokenValid) {
      await this.productRepository.create({
        name,
        barCode,
        createdBy,
        category,
      });
    } else {
      throw new Error("Invalid token");
    }
  }
}

export { CreateProductService };
