import { OkPacketParams } from "mysql2"
import { dal } from "../2-utils/dal"
import { Role } from "../3-models/enums"
import { cyber } from "../2-utils/cyber"
import { CredentialsModel } from "../3-models/credentialsModel"
import { UnauthorizedError } from "../3-models/client-error"

class UserService {


    public async register(user){


        const sql = "insert into users values(default,?,?,?,?,?)"

        user.roleId = Role.User
        const values = [user.firstName, user.lastName, user.email, user.password, user.roleId]
        const info :OkPacketParams = await dal.execute(sql, values)
        user.id = info.insertId
        const token = cyber.generateNewToken(user)
        return token
    }

    public async login(credentials :CredentialsModel ){
        

        const sql = " select * from users where email = ? and password = ? "
const values = [credentials.email, credentials.password]
const users:OkPacketParams = await dal.execute(sql,values)
const user = users[0]

if(!user)throw new UnauthorizedError("Incorrect email or password")

    const token = cyber.generateNewToken(user)
    return token

}
}

export const userService = new UserService()