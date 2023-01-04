import { UserRepository } from "../repositories/implementations/UserRepository";
import { CreateUserService } from "./CreateUserService";

//aqui se cria as instâncias, atribui seus devidos parâmetros para então compartilhar com o restante dos arquivos...
const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);

export { userRepository, createUserService };
