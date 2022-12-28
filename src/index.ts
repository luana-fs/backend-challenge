import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./connection";

//a porta do servidor do express precisa ser diferente da porta do banco
const port = 3307 || process.env.PORT;

export const app = express();
app.use(cors());

//esse middleware transforma os bodys recebidos em json para objeto
app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  const users = await connection("user");
  res.status(200).send(users);
});

app.post("/users", async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  await connection("user").insert({ name, email, password, id_role: role });

  res.status(201).send("Usuário criado com sucesso");
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}.`);
});
