import { UserRepository } from "../repositories/implementations/UserRepository";
import { CreateUserService } from "./CreateUserService";

const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);

export { userRepository, createUserService };
