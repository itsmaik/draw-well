import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";


export default function DisplayAll() {

  const { searchResults, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {searchResults && searchResults.map((product) => (
        <ProductCard
          products={product}
          key={product.id}
        />
      ))}
    </>
  )
}