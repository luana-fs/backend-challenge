import { connection } from "../../../../connection";
import { Product } from "../../models/Product";
import { IProductRepository } from "../IProductRepository";

//static permite usar a função sem estanciar a classe

//DTO - data transfer object (transferir objetos entre camadas)
interface ICreateProductDTO {
  id?: string;
  name: string;
  barCode: string;
  createdBy: number;
  category: number;
}

class ProductRepository implements IProductRepository {
  constructor() {}

  async create({ name, barCode, createdBy, category }): Promise<void> {
    //FIX IT - meu repositório não precisa conhecer meu connection (inversão de deps?)
    await connection("product").insert({
      name,
      bar_code: barCode,
      created_by: createdBy,
      category,
    });
  }

  async list(): Promise<Product[]> {
    const products = await connection("product");
    return products;
  }

  async edit(
    id: number,
    name: string,
    barCode: string,
    category: number
  ): Promise<number> {
    const product = await connection("product")
      .where({ id_product: id })
      .update({ name: name, bar_code: barCode, category: category });

    return product;
  }

  async findByName(name: string): Promise<Product[]> {
    const product = await connection
      .select("name", "bar_code", "created_at", "created_by", "category")
      .from("product")
      .where({ name });
    return product;
  }

  async findById(id: number) {
    const product = await connection
      .select("name", "bar_code", "created_at", "created_by", "category")
      .from("product")
      .where({ id_product: id });
    return product;
  }

  async delete(id: number): Promise<any> {
    const product = await connection("product").where({ id_product: id }).del();
    return product;
  }
}

export { ProductRepository };
