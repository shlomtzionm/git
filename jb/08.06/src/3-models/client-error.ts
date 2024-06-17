import { StatusCode } from "./enums";

abstract class ClientError{
 public constructor(public status:number, public message: string){}

}

export class RecourseNotFoundError extends ClientError{
    public constructor (id:Number){
        super(StatusCode.NotfOUND, `id ${id} not found`)
    }
}


export class RouteNotFoundError extends ClientError{
    public constructor (route:string,method:string){
        super(StatusCode.NotfOUND, `route ${route} on method ${method} no exist`)
    }

    
}

export class ValidationError extends ClientError {
    public constructor(message: string) {
        super(StatusCode.BadRequest, message);
    }}

    export class UnauthorizedError extends ClientError {
        public constructor(message: string) {
            super(StatusCode.Unauthorized, message);
        }}
    
        