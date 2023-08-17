// import React from "react";
import ProductCard from "./components/productCard";
import ProductInfo from "./components/productCard/components/ProductInfo";
import ProductTitle from "./components/productCard/components/ProductTitle";
import { products } from "./mock_data.js";

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridColumnGap: "12px",
        gridRowGap: "12px",
      }}
    >
      {products.map((user, index) => (
        <ProductCard
          info={
            <ProductInfo>
              <ProductTitle name={user.name} />
              <p>{user.date}</p>
            </ProductInfo>
          }
          email={user.email}
          key={index}
        />
      ))}

      {/* the following component is example for make it more clear */}
      <div style={{ backgroundColor: "red" }}>
        <ProductCard
          info={
            <ProductInfo>
              <ProductTitle name={products[5].name} />
            </ProductInfo>
          }
          email={products[5].email}
        />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <ProductCard email={<p>products[5].email</p>} />
      </div>
    </div>
  );
}
