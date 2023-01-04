import { hashPasswordService } from ".";
import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: number;
}

//a camada services não pode conhecer a api (res.status.send), por isso, usamos o throw new Error.
class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
    confirmPassword,
    role,
  }: IRequest): Promise<void> {
    if (!name) {
      throw new Error("name property is missing");
    }

    if (!email) {
      throw new Error("email property is missing");
    }

    if (!password) {
      throw new Error("password property is missing");
    }

    if (!confirmPassword) {
      throw new Error("password property is missing");
    }

    if (!role) {
      throw new Error("role property is missing");
    }

    const [userAlreadyExists] = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    if (password === confirmPassword) {
      const passwordHash = hashPasswordService.hashPassword(password);
      console.log(passwordHash);
      await this.userRepository.create({
        name,
        email,
        password: passwordHash,
        role,
      });
    } else {
      throw new Error(
        "properties password and confirmPassword must be equal value and type."
      );
    }
  }
}

export { CreateUserService };
