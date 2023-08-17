export default function ProductInfo({ name, date = null }) {
  return (
    <div>
      {name}
      {date}
    </div>
  );
}
