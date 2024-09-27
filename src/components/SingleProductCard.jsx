import StarRating from "./StarRating";
import { FaShoppingCart } from "react-icons/fa";
import calculateDiscount from "../utils/calculateDiscount";

export default function SingleProductCard({product}) {

  const discount = product.price > product.discountedPrice && `${calculateDiscount(product.price, product.discountedPrice)}% off`;

  const discountedPrice = product.price > product.discountedPrice &&  `$${product.discountedPrice}`;

  return (
    <div className="">
      <div className="flex justify-center">
        <img src={product.image.url} alt={product.image.alt} 
        className="w-1/3 min-h-[25rem] max-h-[25rem] object-cover rounded-md" 
        />
        <div className="pl-12 max-w-md">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <StarRating rating={product.rating} />
          <p className="text-lg mt-4">{product.description}</p>

          {/* Price Section */}
          {discountedPrice ? (
            <div className="mt-2">
              <p className="text-gray-400 line-through">{product.price}</p>
              <p className="text-lg font-bold text-red-600">{product.discountedPrice}</p>
            </div>
          )
          :
          <div className="mt-2">
            <p className="text-lg font-bold text-black-600">{product.price}</p>
          </div>
          }
          <button className="bg-orange-500 text-white py-2 px-6 mt-4 rounded w-2/3 flex text-xl items-center justify-center">Add to Cart<span> <FaShoppingCart className="text-white ml-3" /></span></button>
        </div>
      </div>
    </div>
  )
}