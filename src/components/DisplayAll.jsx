import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";


export default function DisplayAll() {

  const { searchResults, loading, error } = useContext(ProductContext);

  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
        <p className="ml-4 text-xl">Loading products...</p>
      </div>
    );
  }

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