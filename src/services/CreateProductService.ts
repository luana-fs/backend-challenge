import { ProductRepository } from "../repositories/ProductRepository";

interface IRequest {
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

    await this.productRepository.create({ name, barCode, createdBy, category });
  }
}

export { CreateProductService };
