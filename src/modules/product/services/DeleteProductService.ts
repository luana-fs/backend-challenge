import { verifyToken } from "../../../utils/JWTGenerator";
import { IProductRepository } from "../repositories/IProductRepository";

interface IRequest {
  id: number;
  auth: string;
}

class DeleteProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute({ id, auth }: IRequest): Promise<number> {
    if (!auth) {
      throw new Error("auth property is missing");
    }

    const isTokenValid = verifyToken(auth);

    if (!isTokenValid) {
      throw new Error("Invalid token");
    }

    if (!id) {
      throw new Error("Id property is missing");
    }

    if (isTokenValid && id) {
      const product = await this.productRepository.delete(Number(id));
      return product;
    }
  }
}

export { DeleteProductService };
