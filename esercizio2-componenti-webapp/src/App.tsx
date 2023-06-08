import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Product } from "./models/product";
import ProductCard from "./components/product-card";
import CategoryCard from "./components/category-card";
import { Category } from "./models/category";

function App() {
  const [sportingGoods, setSportingGoods] = useState<Array<Product>>([
    {
      name: "Football",
      price: 49.99,
    },
    {
      name: "Baseball",
      price: 9.99,
    },
    {
      name: "Basketball",
      price: 29.99,
    },
  ]);
  const [electronics, setElectronics] = useState<Array<Product>>([
    {
      name: "iPod Touch",
      price: 99.99,
    },
    {
      name: "iPhone 5",
      price: 399.99,
    },
    {
      name: "Nexus 7",
      price: 199.99,
    },
  ]);
  const [categ, setCateg] = useState<Array<Category>>([
    {
      name: "Sporting goods",
      products: sportingGoods,
    },
    {
      name: "electronics",
      products: electronics,
    },
  ]);

  return (
    <div className="App">
      <h2>name price</h2>
      <div>
        {categ.map((c, index) => (
          <CategoryCard key={index} category={c} />
        ))}
      </div>
    </div>
  );
}

export default App;
