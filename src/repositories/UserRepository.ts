import { connection } from "../connection";
import { User } from "../models/User";
import { IUserRepository } from "./IUserRepository";

//static permite usar a função sem estanciar a classe

//DTO - data transfer object (transferir objetos entre camadas)
// interface ICreateUserDTO {
//   name: string;
//   email: string;
//   password: string;
//   role: number;
// }

class UserRepository implements IUserRepository {
  private user: User[];

  constructor() {}

  async create({ name, email, password, role }): Promise<void> {
    //FIX IT - meu repositório não precisa conhecer meu connection (inversão de deps?)
    await connection("user").insert({ name, email, password, id_role: role });
  }

  async list(): Promise<User[]> {
    const users = await connection("user");
    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await connection
      .select("name", "email", "password", "id_role")
      .from("user")
      .where({ email });
    return user[0];
  }

  async findById(id: number): Promise<User> {
    const user = await connection
      .select("name", "email", "password", "id_role")
      .from("user")
      .where({ id_user: id });

    return user[0];
  }
}

export { UserRepository };
