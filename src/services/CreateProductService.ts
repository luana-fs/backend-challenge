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
    if (!name || !barCode || !createdBy || !category) {
      throw new Error("Insira os dados corretamente.");
    }

    await this.productRepository.create({ name, barCode, createdBy, category });
  }
}

export { CreateProductService };
