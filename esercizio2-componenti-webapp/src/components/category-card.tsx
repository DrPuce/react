import { Category } from "../models/category";
import ProductCard from "./product-card";

interface Props {
  category: Category;
}

function CategoryCard(props: Props) {
  const { name, products } = props.category;

  return (
    <div>
      <h5>{name}</h5>
      {products.map((p,index) => (
        <ProductCard key={index} product={p} />
      ))}
    </div>
  );
}

export default CategoryCard;
