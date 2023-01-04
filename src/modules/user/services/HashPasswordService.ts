import bcrypt from "bcrypt";

class HashPasswordService {
  private saltRounds = 10;

  hashPassword(plainPassword: string) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(plainPassword, salt);
    return hash;
  }

  checkUser(plainPassword: string, passwordHash: string) {
    const match = bcrypt.compareSync(plainPassword, passwordHash);
    return match;
  }
}

export { HashPasswordService };
