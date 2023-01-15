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
  findByEmail(email: string): Promise<User[]>;
  findById(id: number): Promise<User[]>;
  edit(id: number, name: string, email: string, role: number): Promise<number>;
}

export { IUserRepository };
