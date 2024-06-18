import { UploadedFile } from "express-fileupload";
import { ValidationError } from "./client-error";

export class ProductModel{
public id :number;
public name :string;
public price: number;
public image: UploadedFile

constructor(product:ProductModel){
    
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.image = product.image
}

public validate() {
    if (!this.name) throw new ValidationError("Missing name.");
    if (!this.price) throw new ValidationError("Missing price.");
    if (this.price < 0) throw new ValidationError("Price can't be negative.");
    if (this.price > 1000) throw new ValidationError("Price can't exceed 1000.");
    // if (typeof (this.price) === Number) throw new ValidationError("Price can't exceed 100 price must be a number.");
    if (this.name.length > 100) throw new ValidationError("Name can't exceed 100 chars.");
}
}