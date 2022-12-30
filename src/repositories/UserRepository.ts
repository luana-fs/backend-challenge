import { connection } from "../connection";
import { User } from "../models/User";

//static permite usar a função sem estanciar a classe

//DTO - data transfer object (transferir objetos entre camadas)
interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: number;
}

class UserRepository {
  private user: User[];

  constructor() {}

  static async create({
    name,
    email,
    password,
    role,
  }: ICreateUserDTO): Promise<void> {
    //FIX IT - meu repositório não precisa conhecer meu connection (inversão de deps?)
    await connection("user").insert({ name, email, password, id_role: role });
  }

  static async list(): Promise<User[]> {
    const users = await connection("user");
    return users;
  }

  static async findById(id: number) {
    const user = await connection
      .select("name", "email")
      .from("user")
      .where({ id_user: id });
    return user;
  }
}

export { UserRepository };
