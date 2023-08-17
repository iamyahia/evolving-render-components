// import React from "react";
import ProductCard from "./components/productCard";
import { users } from "./mock_data.js";

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
      {users.map((user, index) => (
        <ProductCard
          info={
            <ProductCard.Info>
              <ProductCard.Title name={user.name} />
              <p>{user.date}</p>
            </ProductCard.Info>
          }
          email={user.email}
          key={index}
        />
      ))}
    </div>
  );
}
