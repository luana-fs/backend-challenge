import { hashPasswordService } from ".";
import { IUserRepository } from "../repositories/IUserRepository";
import { tokenGenerator } from "./utils/JWTGenerator";

interface IRequest {
  email: string;
  password: string;
}

//a camada services não pode conhecer a api (res.status.send), por isso, usamos o throw new Error.
class SignUpService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: IRequest): Promise<string> {
    if (!email) {
      throw new Error("email property is missing");
    }

    if (!password) {
      throw new Error("password property is missing");
    }

    const [user] = await this.userRepository.findByEmail(email);

    const match = hashPasswordService.checkUser(password, user.password);

    if (match) {
      const token = tokenGenerator(email, password);
      return token;
    } else {
      throw new Error("Incorrect password");
    }
  }
}

export { SignUpService };
