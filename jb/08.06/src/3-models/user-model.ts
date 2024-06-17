import { Role } from "./enums";

export class UserModel {
    public id : number;
    public firstName: string;
    public lastName : string;
    public email:string;
    public password : string
    public roleId : Role

    public constructor (user:UserModel){
        this.email = user.email;
        this.firstName = user.firstName;
        this.id = user.id;
        this.lastName = user.lastName;
        this.password = user.password;
        this.roleId = user.roleId

    }
}