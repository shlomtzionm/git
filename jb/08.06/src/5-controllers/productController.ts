import express, { Response, Request, NextFunction } from "express";
import { productService } from "../4-services/product-service";
import { ProductModel } from "../3-models/product-model";
import { StatusCode } from "../3-models/enums";
import { securityMiddleware } from "../6-middleware/securityMiddleware";
import { fileSaver } from "uploaded-file-saver";

class ProductController {
  public readonly router = express.Router();

  public constructor() {
    this.router.get("/products", this.getAllProducts);
    this.router.get("/products/:id([0-9]+)", this.getOneProduct);
    this.router.post(
      "/products",
      securityMiddleware.validateLogin,
      this.addProduct
    );
    this.router.put(
      "/products/:id([0-9]+)",
      securityMiddleware.validateLogin,
      this.updateProduct
    );
    this.router.delete( "/products/:id([0-9]+)",securityMiddleware.validateAdmin,this.deleteProduct);
    this.router.get("/products/images/:imageName", this.getProductImages);
  }

  private async getAllProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (err: any) {
      next(err);
    }
  }

  private async getOneProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const product = await productService.getOneProduct(id);

      res.json(product);
    } catch (err: any) {
      next(err);
    }
  }

  private async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.image = req.files?.image;
      const product = new ProductModel(req.body);
      const addedProduct = await productService.addProduct(product);
      res.status(StatusCode.Created).json(addedProduct);
    } catch (err: any) {
      next(err);
    }
  }

  private async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      req.body.id = id;
      const product = new ProductModel(req.body);
      const updatedProduct = await productService.updateProduct(product);
      res.json(updatedProduct);
    } catch (err: any) {
      next(err);
    }
  }

  private async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      await productService.deleteProducts(id);
      res.sendStatus(StatusCode.NoContent);
    } catch (err: any) {
      next(err);
    }
  }

  private async getProductImages(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const imageName = req.params.imageName;
      const imagePath = fileSaver.getFilePath(imageName, true);
      res.sendFile(imagePath);
    } catch (err: any) {
      next(err);
    }
  }
}

export const productController = new ProductController();
