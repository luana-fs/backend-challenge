import { User } from "../models/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { verifyToken } from "../../../utils/JWTGenerator";

interface IRequest {
  id: number;
  auth: string;
  name: string;
  email: string;
  role: number;
}

class EditUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, auth, name, email, role }: IRequest): Promise<User[]> {
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
      const user = await this.userRepository.edit(
        Number(id),
        name,
        email,
        role
      );
      return user;
    }
  }
}

export { EditUserService };
