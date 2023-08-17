// import React from "react";
import { users } from "./mock_data.js";

export default function ProductCard() {
  console.log("users: ", users);
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
        <div
          style={{
            backgroundColor: "#d0f5f7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={index}
        >
          <p>name: {user.name}</p>
          {user.date && <p>date: {user.date}</p>}
          <p>gender: {user.gender}</p>
          {user.email && <p>email: {user.email}</p>}
        </div>
      ))}
    </div>
  );
}
