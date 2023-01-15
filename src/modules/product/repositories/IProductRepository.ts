import { Product } from "../models/Product";

interface ICreateProductDTO {
  name: string;
  barCode: string;
  createdBy: string;
  category: number;
}

interface IProductRepository {
  create({
    name,
    barCode,
    createdBy,
    category,
  }: ICreateProductDTO): Promise<void>;
  list(): Promise<Product[]>;
  findByName(name: string): Promise<Product[]>;
  findById(id: number): Promise<Product[]>;
  edit(
    id: number,
    name: string,
    barCode: string,
    category: number
  ): Promise<number>;
  delete(id: number): Promise<any>;
}

export { IProductRepository };
