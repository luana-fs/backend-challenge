import { UserRepository } from "../repositories/UserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: number;
}

//a camada services não pode conhecer a api (res.status.send), por isso, usamos o throw new Error.
class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password, role }: IRequest): Promise<void> {
    if (!name) {
      throw new Error("name property is missing");
    }

    if (!email) {
      throw new Error("email property is missing");
    }

    if (!password) {
      throw new Error("password property is missing");
    }

    if (!role) {
      throw new Error("role property is missing");
    }

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    await this.userRepository.create({ name, email, password, role });
  }
}

export { CreateUserService };
