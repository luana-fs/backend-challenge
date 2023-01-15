import { verifyToken } from "../../../utils/JWTGenerator";
import { IProductRepository } from "../repositories/IProductRepository";

interface IRequest {
  id: number;
  auth: string;
  name: string;
  barCode: string;
  category: number;
}

class EditProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute({
    id,
    auth,
    name,
    barCode,
    category,
  }: IRequest): Promise<number> {
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
      const user = await this.productRepository.edit(
        Number(id),
        name,
        barCode,
        category
      );
      return user;
    }
  }
}

export { EditProductService };
