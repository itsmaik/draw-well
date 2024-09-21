import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import calculateDiscount from "../utils/calculateDiscount"


export default function DisplayAll() {

  const { data: products, loading, error } = useFetch();
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {products && products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image.url}
          title={product.title}
          description={product.description}
          discount={product.price > product.discountedPrice && `${calculateDiscount(product.price, product.discountedPrice)}% off`}
          price={`$${product.price}`}
          discountedPrice={product.price > product.discountedPrice &&  `$${product.discountedPrice}`}
        />
      ))}
    </>
  )
}