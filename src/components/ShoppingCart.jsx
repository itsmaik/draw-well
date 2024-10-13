import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";


export default function ShoppingCart({ onClick }) {
  const { cartItems } = useContext(ProductContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button aria-label="Shopping Cart" className="relative flex items-center" onClick={onClick}>
      <FaShoppingCart className="text-gray-600 text-xl" />
      {totalItems > 0 && (
        <span className="absolute -top-3 -right-5 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  );
}
