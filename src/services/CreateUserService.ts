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
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("O usuário já existe.");
    }

    await this.userRepository.create({ name, email, password, role });
  }
}

export { CreateUserService };
