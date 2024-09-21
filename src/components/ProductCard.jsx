function ProductCard({ image, title, description, discount, price, discountedPrice }) {
  return (
    <div className="border rounded-lg shadow-lg max-w-xs p-4">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full max-h-52 object-cover"
        />
        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded-full">
            {discount}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-lg font-semibold">{description}</h2>

        {/* Price Section */}
        <div className="mt-2">
          <p className="text-gray-400 line-through">{price}</p>
          <p className="text-lg font-bold text-red-600">{discountedPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
