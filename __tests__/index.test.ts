// describe("users", () => {
//   it("GET /users --> array de usuários"), () => {};
//   it("GET /users/id --> pega um usuário específico");
//   it("POST /users --> cria um usuário ");
//   it("DELETE /users/id --> deleta um usuário específico");
// });

const request = require("supertest");
import { app } from "../src/app";

test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "hello2",
      email: "hello2@test.com",
      password: "1234567890",
      confirmPassword: "1234567890",
      role: 1,
    })
    .expect(201);
});

test("Should not create duplicate users", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "bea",
      email: "bea@test.com",
      password: "1234567890",
      confirmPassword: "1234567890",
      role: 1,
    })

    .post("/users")
    .send({
      name: "bea",
      email: "bea@test.com",
      password: "1234567890",
      confirmPassword: "1234567890",
      role: 1,
    })
    .expect(400);
  expect(response.body.error).toBeTruthy();
});
