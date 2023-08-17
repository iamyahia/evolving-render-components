import ProductTitle from "./ProductTitle";
export default function ProductInfo({ name, date = null }) {
  return (
    <div>
      <p>
        name: <ProductTitle name={name} />
      </p>
      {date && <p>date: {date}</p>}
    </div>
  );
}
