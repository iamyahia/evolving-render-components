// import React from "react";
import ProductCard from "./components/productCard";
import ProductInfo from "./components/productCard/components/ProductInfo";
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
          info={<ProductInfo name={user.name} date={user.date} />}
          email={user.email}
          key={index}
        />
      ))}

      {/* the following component is example for make it more clear */}
      <div style={{ backgroundColor: "red" }}>
        <ProductCard
          info={<ProductInfo name={users[5].name} />}
          email={users[5].email}
        />
      </div>
    </div>
  );
}
