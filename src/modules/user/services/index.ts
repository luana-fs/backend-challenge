import { UserRepository } from "../repositories/implementations/UserRepository";
import { CreateUserService } from "./CreateUserService";
import { FindUserByIdService } from "./FindUserByIdService";
import { HashPasswordService } from "./HashPasswordService";
import { SignUpService } from "./SignUpService";

//aqui se cria as instâncias, atribui seus devidos parâmetros para então compartilhar com o restante dos arquivos...
//repository
const userRepository = new UserRepository();

//services
const createUserService = new CreateUserService(userRepository);
const signUpService = new SignUpService(userRepository);
const hashPasswordService = new HashPasswordService();
const findUserByIdService = new FindUserByIdService(userRepository);

export {
  userRepository,
  createUserService,
  hashPasswordService,
  signUpService,
  findUserByIdService,
};
