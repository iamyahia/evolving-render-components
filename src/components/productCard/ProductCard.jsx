import { users } from "../../mock_data.js";

export default function ProductCard({ info = null, email = null }) {
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
        {info}
        {email}
      </div>
    </div>
  );
}
