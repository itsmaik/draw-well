import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import SingleProductCard from "./SingleProductCard";

function SingleProduct() {
  const { id } = useParams();
  const { products, loading, error } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    if (products && id) {
      const selectedProduct = products.find((p) => p.id === id);
      setProduct(selectedProduct);
    }
  }, [products, loading, id]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <SingleProductCard 
      product={product}
      key={product.id}
    />
  );
}

export default SingleProduct;
