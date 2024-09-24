import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

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
    <div>
      <div className="flex">
        <img src={product.image.url} alt={product.title} className="w-1/3" />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg mt-4">{product.description}</p>
          <p className="text-2xl font-bold mt-4">${product.price}</p>
          {product.discountedPrice && (
            <p className="text-xl text-red-500 mt-2">
              Discounted Price: ${product.discountedPrice}
            </p>
          )}
          <button className="bg-orange-500 text-white py-2 px-6 mt-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
