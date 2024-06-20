import dotenv from "dotenv"
dotenv.config()

class AppConfig{
public readonly port = process.env.PORT

public readonly mysqlHOST = process.env.MYSQL_HOST
public readonly mysqlUser = process.env.MYSQL_USER
public readonly mysqlPassword = process.env.MYSQL_PASSWORD
public readonly mysqlDatabase = process.env.MYSQL_DATABASE

}

export const appConfig = new AppConfig()