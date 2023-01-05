import { ProductRepository } from "../repositories/implementations/ProductRepository";
import { CreateProductService } from "./CreateProductService";
import { FindProductService } from "./findProductByIdService";

//aqui se cria as instâncias, atribui seus devidos parâmetros para então compartilhar com o restante dos arquivos...
const productRepository = new ProductRepository();

const createProductService = new CreateProductService(productRepository);
const findProductService = new FindProductService(productRepository);

export { productRepository, createProductService, findProductService };
