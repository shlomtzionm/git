import { Express ,Request,Response,NextFunction } from "express"

class LogMiddleware{
 public logRequest(req:Request,res:Response,next:NextFunction){
console.log("----------------------")
console.log("Method "+req.method)
console.log("URL "+req.originalUrl)
console.log("Body" , req.body)
console.log("----------------------")


next()
 }
}

export const logMiddleware = new LogMiddleware()