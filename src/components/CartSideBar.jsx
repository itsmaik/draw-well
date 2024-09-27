import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { FaTimes } from "react-icons/fa";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems } = useContext(ProductContext);
  
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-80 z-50`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <button onClick={onClose} aria-label="Close Cart">
          <FaTimes />
        </button>
      </div>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <img src={item.image.url} alt={item.title} className="w-16 h-16" />
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p>${item.discountedPrice}</p>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <button className="bg-orange-500 text-white w-full py-2 rounded">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
