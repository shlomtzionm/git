import { dal } from "../2-utils/dal"

class ProductServices{
    public async getAllProducts(){
        const sql = "select * from myShop.products"
const products = await dal.execute(sql)
return products

    }
}

export const productServices = new ProductServices()