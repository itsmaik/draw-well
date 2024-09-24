import ProductCard from "./ProductCard";
import calculateDiscount from "../utils/calculateDiscount"
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";


export default function DisplayAll() {

  const { searchResults, loading, error } = useContext(ProductContext);
  console.log(searchResults);
  
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {searchResults && searchResults.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image.url}
          title={product.title}
          alt={product.image.alt}
          description={product.description}
          discount={product.price > product.discountedPrice && `${calculateDiscount(product.price, product.discountedPrice)}% off`}
          price={`$${product.price}`}
          discountedPrice={product.price > product.discountedPrice &&  `$${product.discountedPrice}`}
        />
      ))}
    </>
  )
}