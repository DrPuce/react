import { Product } from "../models/product";

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  const { name, price } = props.product;

  return (
    <div>
      <p>
        {name} {price}
      </p>
    </div>
  );
}

export default ProductCard;
