import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_KEY;

const tokenGenerator = (email: string, password: string) =>
  jwt.sign({ email, password }, secretKey, { algorithm: "HS256" });

export { tokenGenerator };
