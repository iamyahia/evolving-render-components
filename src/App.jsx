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
          name={user.name}
          date={user.date}
          gender={user.gender}
          email={user.email}
          key={index}
        />
      ))}
    </div>
  );
}
