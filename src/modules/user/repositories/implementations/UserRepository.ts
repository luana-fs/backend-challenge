import { connection } from "../../../../connection";
import { User } from "../../models/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  constructor() {}

  async create({ name, email, password, role }): Promise<void> {
    //FIX IT - meu repositório não precisa conhecer meu connection (inversão de deps?)
    await connection("user").insert({ name, email, password, id_role: role });
  }

  async list(): Promise<User[]> {
    const users = await connection
      .select("id_user", "name", "email", "id_role")
      .from("user");
    return users;
  }

  async edit(
    id: number,
    name: string,
    email: string,
    role: number
  ): Promise<number> {
    const user = await connection("user")
      .where({ id_user: id })
      .update({ name: name, email: email, id_role: role });

    return user;
  }

  async findByEmail(email: string): Promise<User[]> {
    const user = await connection
      .select("id_user", "name", "email", "password", "id_role")
      .from("user")
      .where({ email });
    return user;
  }

  async findById(id: number): Promise<User[]> {
    const user = await connection
      .select("name", "email", "id_role")
      .from("user")
      .where({ id_user: id });

    return user;
  }
}

export { UserRepository };
