// import React from "react";
import { users } from "../../mock_data.js";

export default function ProductCard({ name, date, gender, email }) {
  console.log("users: ", users);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#d0f5f7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>name: {name}</p>
        {date && <p>date: {date}</p>}
        <p>gender: {gender}</p>
        {email && <p>email: {email}</p>}
      </div>
    </div>
  );
}
