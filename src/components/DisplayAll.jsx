import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";


export default function DisplayAll() {

  function Discount(price, discount) {
    const res = (price - discount) / price * 100;
    return res.toFixed(0)
  }

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
          discount={`${Discount(product.price, product.discountedPrice)}% off`}
          price={`$${product.price}`}
          discountedPrice={`$${product.discountedPrice}`}
        />
      ))}
    </>
  )
}