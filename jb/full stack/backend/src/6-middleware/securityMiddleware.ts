import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../3-models/enums";
import { cyber } from "../2-utils/cyber";
import { UnauthorizedError } from "../3-models/client-error";

class SecurityMiddleware {
  public preventXssAttack(req: Request, res: Response, next: NextFunction) {
    for (const prop in req.body) {
      const value = req.body[prop];
      if (typeof value === "string" && value.includes("<script>")) {
        res.status(StatusCode.Forbidden).send("nice try!");
        return;
      }
    }

    next();
  }

  public validateLogin(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    const token = authorizationHeader?.substring(7);
    const isValid = cyber.isTokenValid(token);

    if (!isValid) {
      next(new UnauthorizedError("You are not logged in"));
    } else {
      next();
    }
  }

  public validateAdmin(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.substring(7);
    const isValid = cyber.isTokenValid(token);

    if (!isValid) {
      next(new UnauthorizedError("You are not logged in"));
    return
    } 
    
    const isAdmin = cyber.isAdmin(token)

    if (!isAdmin){
        next(new UnauthorizedError("You are not authorized"));
        return
             }


    next();
    
  }
}

export const securityMiddleware = new SecurityMiddleware();
