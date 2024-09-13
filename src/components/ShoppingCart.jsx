import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCart() {
  return (
    <a href="#" aria-label="Shopping Cart" className="relative flex items-center">
      <FaShoppingCart className="text-gray-600" />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
        0
      </span>
    </a>
  )
}