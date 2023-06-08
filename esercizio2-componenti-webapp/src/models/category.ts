import { Product } from "./product";

export interface Category {
  name: string;
  products: Array<Product>;
}
