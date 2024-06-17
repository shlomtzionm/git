import { OkPacketParams } from "mysql2";
import { dal } from "../2-utils/dal";
import { ProductModel } from "../3-models/productModel";
import { RecourseNotFoundError } from "../3-models/client-error";
import { fileSaver } from "uploaded-file-saver";

class ProductService {
  public async getAllProducts() {
    const sql =
      "select *, concat('http://localhost:3000/api/products/images/', imageName) as imageUrl from products";
    const products = await dal.execute(sql);
    return products;
  }

  public async getOneProduct(id: Number) {
    const sql =
      "select *, concat('http://localhost:3000/api/products/images/', imageName) as imageUrl from products where id = ?";
    const products = await dal.execute(sql, [id]);
    const product = products[0];

    if (!product) {
      throw new RecourseNotFoundError(id);
    }

    return product;
  }

  public async addProduct(product: ProductModel) {
    product.validate();
    const imageName = await fileSaver.add(product.image);

    const sql = "insert into products(name, price, imageName) values(?,?,?)";
    const info: OkPacketParams = await dal.execute(sql, [
      product.name,
      product.price,
      imageName,
    ]);

product = await this.getOneProduct(info.insertId)

    return product;
  }

  public async updateProduct(product: ProductModel) {
    product.validate();
    const sql = "UPDATE products SET name = ?, price = ? WHERE id = ?";
    const info: OkPacketParams = await dal.execute(sql, [
      product.name,
      product.price,
      product.id,
    ]);
    if (info.affectedRows === 0) {
      throw new RecourseNotFoundError(product.id);
    }
    return product;
  }

  public async deleteProducts(id: number) {
    const sql = "DELETE FROM products WHERE id = ?";
    const info = await dal.execute(sql, [id]);
    if (info.affectedRows === 0) {
      throw new RecourseNotFoundError(id);
    }
  }
}

export const productService = new ProductService();
