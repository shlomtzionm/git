import mysql2, {PoolOptions, QueryError, FieldPacket} from "mysql2"
import { appConfig } from "./app-config"


class Dal {
    private options: PoolOptions={
host:appConfig.mysqlHOST,
user:appConfig.mysqlUSER,
password:appConfig.mysqlPASSWORD,
database:appConfig.mysqlDATABASE
    }

    private readonly connection = mysql2.createPool(this.options)

    public execute(sql:string,values? :any[]) :Promise<any>{
        return new Promise<any>((resolve,reject)=>{
          this.connection.query(sql,values,(err,result,fields)=>{
            if (err){
                 reject(err)
            }else{
                resolve(result)
}
    })
})
}   

}

export const dal = new Dal()