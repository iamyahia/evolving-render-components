import { users } from "../../mock_data.js";
import ProductInfo from "./components/ProductInfo.jsx";

export default function ProductCard({ info, email }) {
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
        {/*  */}
        {info}
        <p>email: {email} </p>
      </div>
    </div>
  );
}
