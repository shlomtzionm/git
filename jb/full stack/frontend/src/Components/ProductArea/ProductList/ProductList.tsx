import { useEffect, useState } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList(): JSX.Element {
  
  const [products ,setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
    productService
      .getAllProducts()
      .then((products) => setProducts(products))
      .catch((err) => alert(err.message));
  }, []);

  return (<div className="ProductList">
    {products.map(p=><ProductCard product={p} key={p.id}/>)}
  </div>);
}
