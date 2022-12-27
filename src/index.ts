import express, { Request, Response } from "express";

const port = 3307 || process.env.PORT;

export const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.listen(port, () => {
  console.log("O servidor está rodando na porta 3307.");
});
