import express, { Response, Request, NextFunction } from "express";
import { productServices } from "../4-services/product-services";

class ProductController{
    public readonly router = express.Router()

public constructor(){
    this.router.get("/products",this.getAllProducts)
    this.router.get("/products/:id",this.getOneProduct)
}

private async getAllProducts(req:Request,res:Response,next:NextFunction){
    try{
        const products = await productServices.getAllProducts()
        res.json(products)
    } catch (err:any){
        next(err)
    }
}

private async getOneProduct(req:Request,res:Response,next:NextFunction){
    try{
        const id = +req.params.id
        const product = await productServices.getOneProduct(id)
        res.json(product)
    } catch (err:any){
        next(err)
    }
}

}
export const productController = new ProductController() 