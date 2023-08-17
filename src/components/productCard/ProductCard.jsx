// eslint-disable-next-line react/prop-types
export default function ProductCard({ info = null, email = null }) {
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
