import jwt, { SignOptions } from "jsonwebtoken";
import { UserModel } from "../3-models/user-model";
import { Role } from "../3-models/enums";

class Cyber {
  private secretKey = "theAmazing4578-99students";

  public generateNewToken(user): string {
    delete user.password;
    const container = { user };
    const options: SignOptions = { expiresIn: "3h" };
    const token = jwt.sign(container, this.secretKey, options);
    return token;
  }

  public isTokenValid(token: string) {
    try {
      if (!token) return false;

      jwt.verify(token, this.secretKey);
      return true;
    } catch (err: any) {
      return false;
    }
  }

  public isAdmin(token: string): boolean {
    try {
      const container = jwt.decode(token) as { user: UserModel };
      const user = container.user;
 return user.roleId === Role.Admin
    } catch (err) {
      return false;
    }
  }
}

export const cyber = new Cyber();
