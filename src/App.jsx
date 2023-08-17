// import React from "react";
import ProductCard from "./components/productCard";
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
            <ProductCard.Info>
              <ProductCard.Title>
                <i>{products[5].name}</i>
              </ProductCard.Title>
              <p>{user.date}</p>
            </ProductCard.Info>
          }
          email={user.email}
          key={index}
        />
      ))}

      <div style={{ backgroundColor: "red" }}>
        <ProductCard
          info={
            <ProductCard.Info>
              <ProductCard.Title>
                <strong>{products[5].name}</strong>
              </ProductCard.Title>
            </ProductCard.Info>
          }
          email={products[5].email}
        />
      </div>
    </div>
  );
}
