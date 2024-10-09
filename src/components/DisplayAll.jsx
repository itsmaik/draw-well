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

  return (
    <>
      {searchResults && searchResults.length ? (
        searchResults.map((product) => (
          <ProductCard products={product} key={product.id} />
        ))
      ) : (
        <div className="flex justify-center items-center min-h-80 fixed top-0 min-w-full bg-slate-50">
          <p>No product found</p>
        </div>
      )}
    </>
  );
}
