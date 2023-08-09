import Product from "../components/Product";

export default function About() {
  return (
    <>
      <h2>Shop Page</h2>
      <div className="flex space-x-2">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}
