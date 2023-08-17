import React from "react";
import ProductTitle from "./ProductTitle";
export default function ProductInfo({ name, date, email }) {
  return (
    <div>
      <p>
        name: <ProductTitle name={name} />
      </p>
      {date && <p>date: {date}</p>}
      {email && <p>email: {email}</p>}
    </div>
  );
}
