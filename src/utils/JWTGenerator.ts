import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_KEY;

const tokenGenerator = (id: number, email: string, password: string) =>
  jwt.sign({ id, email, password }, secretKey, { algorithm: "HS256" });

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded);
    if (decoded) return true;
  } catch (err) {
    throw new Error("Invalid token");
  }
};

export { tokenGenerator, verifyToken };
