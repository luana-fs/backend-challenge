import { User } from "../models/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: number;
}

interface IUserRepository {
  create({ name, email, password, role }: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
}

export { IUserRepository };
