import { UserRepository } from "../repositories/implementations/UserRepository";
import { CreateUserService } from "./CreateUserService";
import { HashPasswordService } from "./HashPasswordService";
import { SignUpService } from "./SignUpService";

//aqui se cria as instâncias, atribui seus devidos parâmetros para então compartilhar com o restante dos arquivos...
const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);
const signUpService = new SignUpService(userRepository);
const hashPasswordService = new HashPasswordService();

export {
  userRepository,
  createUserService,
  hashPasswordService,
  signUpService,
};
