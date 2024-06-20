import { ProductModel } from "../../../Models/ProductModel";
import "./ProductCard.css";

type ProductCardProps = {
  product: ProductModel;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
  return (
    <div className="ProductCard">
      <div>
        <span>{props.product.name}</span>
        <span>price: {props.product.price}</span>
        <span>stock: {props.product.stock}</span>


      </div>
      <div>
        <img src={props.product.imageUrl} alt="pic"/>
      </div>
    </div>
  );
}
