import { verifyToken } from "../../../utils/JWTGenerator";
import { Product } from "../models/Product";
import { ProductRepository } from "../repositories/implementations/ProductRepository";

interface IRequest {
  id: number;
  auth: string;
}

class FindProductService {
  constructor(private productRepository: ProductRepository) {}

  async execute({ id, auth }: IRequest): Promise<Product[]> {
    if (!id) {
      throw new Error("Id property is missing");
    }

    if (!auth) {
      throw new Error("Token is missing");
    }

    const isTokenValid = verifyToken(auth);

    if (!isTokenValid) {
      throw new Error("Invalid token");
    }

    //FIX IT - essa verificação poderia ser um middleware que checka se o usuário está autorizado
    if (isTokenValid) {
      const product = await this.productRepository.findById(id);
      return product;
    }
  }
}

export { FindProductService };
