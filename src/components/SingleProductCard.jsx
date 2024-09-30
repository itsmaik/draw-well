import StarRating from "./StarRating";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import placeHolderImg from '../assets/ecommerce.avif';
import Review from "./Review";

export default function SingleProductCard({product}) {

  const { addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const discountedPrice = product.price > product.discountedPrice &&  `$${product.discountedPrice}`;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center">
        <img 
        src={product.image.url || placeHolderImg} 
        alt={product.image.alt || product.title} 
        className="w-1/3 min-h-[25rem] max-h-[25rem] object-cover rounded-md" 
        />
        <div className="pl-12 max-w-md">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <StarRating rating={product.rating} />
          <p className="text-lg mt-4">{product.description}</p>

          {/* Price Section */}
          <div className="mt-2">
            {discountedPrice ? (
              <>
                <p className="text-gray-400 line-through">${product.price}</p>
                <p className="text-lg font-bold text-red-600">{discountedPrice}</p>
              </>
            ) : (
              <p className="text-lg font-bold text-black">${product.price}</p>
            )}
          </div>

          <button onClick={handleAddToCart} className="bg-orange-500 text-white py-2 px-6 mt-4 rounded w-2/3 flex text-xl items-center justify-center font-semibold" aria-label="Add to cart">Add to Cart<span> <FaShoppingCart className="text-white ml-3" /></span></button>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <Review
              key={review.id}
              username={review.username}
              rating={review.rating}
              description={review.description}
            />
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  )
}