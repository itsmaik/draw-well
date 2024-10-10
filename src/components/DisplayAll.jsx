import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Loader from "./Loader";
import Error from "./Error";

export default function DisplayAll() {
  const { searchResults, loading, error } = useContext(ProductContext);

  if (loading) return  <Loader />
  if (error) return <Error error={error} />
  if (searchResults === undefined) return;

  if (searchResults.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-80 fixed top-0 min-w-full bg-slate-50">
        <p>No product found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
      {searchResults.map((product) => (
        <ProductCard products={product} key={product.id} />
      ))}
    </div>
  );
}
