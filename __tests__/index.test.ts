// describe("users", () => {
//   it("GET /users --> array de usuários"), () => {};
//   it("GET /users/id --> pega um usuário específico");
//   it("POST /users --> cria um usuário ");
//   it("DELETE /users/id --> deleta um usuário específico");
// });

const request = require("supertest");
import app from "../src/app";

test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "paulo",
      email: "paulo10@test.com",
      password: "1234567890",
      role: 1,
    })
    .expect(201);
});
