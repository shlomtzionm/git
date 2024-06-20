import dotenv from "dotenv"
dotenv.config()

class AppConfig{
    public readonly port =  process.env.PORT
    public readonly mysqlHOST =  process.env.MYSQL_HOST 
    public readonly mysqlUSER = process.env.MYSQL_USER 
    public readonly mysqlPASSWORD = process.env.MYSQL_PASSWORD 
    public readonly mysqlDATABASE = process.env.MYSQL_DATABASE 

}

export const appConfig = new AppConfig()
