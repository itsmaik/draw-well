import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { FaTimes, FaTrash } from "react-icons/fa";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemQuantity } = useContext(ProductContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalDiscount = cartItems.reduce(
    (sum, item) => sum + (item.price - item.discountedPrice) * item.quantity,
    0
  );
  const totalToPay = totalPrice - totalDiscount;


  const handleIncreaseQuantity = (item) => {
    addToCart(item);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

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
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <img src={item.image.url} alt={item.title} className="w-16 h-16" />
                <p>{item.title}</p>

                {/* Quantity Selector */}
                <div className="flex items-center border p-1">
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="px-2 text-lg"
                    aria-label="Decrease Quantity"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="px-2 text-lg"
                    aria-label="Increase Quantity"
                  >
                    +
                  </button>
                </div>

                <p className="line-through">${item.price}</p>
                <p>${item.discountedPrice}</p>
              </div>
              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
                aria-label="Remove Item"
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pricing Summary */}
      <div className="p-4 border-t">
        <div className="flex justify-between">
          <p>Purchase price</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-green-500">
          <p>Discount</p>
          <p>${totalDiscount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-black font-bold">
          <p>Total</p>
          <p>${totalToPay.toFixed(2)}</p>
        </div>

        <button className="bg-orange-500 text-white w-full py-2 rounded mt-4 font-semibold text-xl">
          Go to Checkout
        </button>

      </div>
    </div>
  );
}
