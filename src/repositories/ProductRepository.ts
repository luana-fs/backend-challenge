import { connection } from "../connection";
import { Product } from "../models/Product";

//static permite usar a função sem estanciar a classe

//DTO - data transfer object (transferir objetos entre camadas)
interface ICreateProductDTO {
  id?: string;
  name: string;
  barCode: string;
  createdBy: number;
  category: number;
}

class ProductRepository {
  private products: Product[];

  constructor() {}

  async create({
    name,
    barCode,
    createdBy,
    category,
  }: ICreateProductDTO): Promise<void> {
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

  async findById(id: number) {
    const product = await connection
      .select("name", "bar_code", "created_at", "created_by", "category")
      .from("product")
      .where({ id_product: id });
    return product;
  }
}

export { ProductRepository };
