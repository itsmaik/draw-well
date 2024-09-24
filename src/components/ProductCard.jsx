import { Link } from "react-router-dom";
import calculateDiscount from "../utils/calculateDiscount";

function ProductCard({ products }) {

  const discount = products.price > products.discountedPrice && `${calculateDiscount(products.price, products.discountedPrice)}% off`;

  const discountedPrice = products.price > products.discountedPrice &&  `$${products.discountedPrice}`;

  return (
    <div className=" bg-stone-50 max-w-xs hover:scale-105 ease-in-out duration-500">
      <Link to={`/product/${products.id}`}>
        {/* Product Image */}
        <div className="relative">
          <img
            src={products.image.url}
            alt={products.image.alt}
            className="w-full min-h-72 max-h-72 object-cover rounded-md"
          />
          {/* Discount Badge */}
          {discount && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              {discount}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="mt-4 px-2">
          <p className="text-gray-500 text-sm">{products.title}</p>
          <h2 className="text-gray-800 font-semibold">{products.description}</h2>

          {/* Price Section */}
          {discountedPrice ? (
            <div className="mt-2">
              <p className="text-gray-400 line-through">{products.price}</p>
              <p className="text-lg font-bold text-red-600">{products.discountedPrice}</p>
            </div>
          )
          :
          <div className="mt-2">
            <p className="text-lg font-bold text-black-600">{products.price}</p>
          </div>
          }
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;