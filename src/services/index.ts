import { ProductRepository } from "../repositories/implementations/ProductRepository";
import { UserRepository } from "../repositories/implementations/UserRepository";

import { CreateProductService } from "./CreateProductService";
import { CreateUserService } from "./CreateUserService";

const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);

const productRepository = new ProductRepository();
const createProductService = new CreateProductService(productRepository);

export {
  userRepository,
  createUserService,
  productRepository,
  createProductService,
};
