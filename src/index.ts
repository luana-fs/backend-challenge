import { app } from "./app";

//a porta do servidor do express precisa ser diferente da porta do banco
const port = process.env.PORT || 3307;
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}.`);
});
