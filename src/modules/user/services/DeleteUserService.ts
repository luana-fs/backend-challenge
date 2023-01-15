import { User } from "../models/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { verifyToken } from "../../../utils/JWTGenerator";

interface IRequest {
  id: number;
  auth: string;
}

class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, auth }: IRequest): Promise<number> {
    if (!auth) {
      throw new Error("auth property is missing");
    }

    const isTokenValid = verifyToken(auth);

    if (!isTokenValid) {
      throw new Error("Invalid token");
    }

    if (!id) {
      throw new Error("Id property is missing");
    }

    if (isTokenValid && id) {
      const user = await this.userRepository.delete(Number(id));
      return user;
    }
  }
}

export { DeleteUserService };
