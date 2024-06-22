import { dal } from "../2-utils/dal"
import { OkPacketParams } from "mysql2";

class ProductServices{
    
    public async getAllProducts(){
        const sql = "select * from myShop.products"
const products = await dal.execute(sql)
return products
    }


    public async getOneProduct(id:number){
        const sql = "select * from myShop.products where id = ?"
const products = await dal.execute(sql,[id])
return products[0]
}

public async addProduct(id:number){
    const sql = "insert into products(name, price, imageName) values(?,?,?)";
    const info :OkPacketParams = 
const products = await dal.execute(sql,[id])
return products[0]
}



}

export const productServices = new ProductServices()