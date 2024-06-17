import {  Request,Response,NextFunction } from "express"
import { StatusCode } from "../3-models/enums"
import { RouteNotFoundError } from "../3-models/client-error"


class ErrorMiddleware{
 public catchAll(err:any, req:Request,res:Response,next:NextFunction){
    console.log(err)

    const statusCode = err.status || StatusCode.InternalServerError
    const message = err.message

    res.status(statusCode).send(message)
 }


 public routeNotFound( req:Request,res:Response,next:NextFunction){
const error = new RouteNotFoundError (req.originalUrl, req.method)

next(error
)

   next()
 }
}

export const errorMidDleware = new ErrorMiddleware()