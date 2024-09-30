import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export default function useCartCalculations() {
  const { cartItems, addToCart, removeFromCart, updateCartItemQuantity } = useContext(ProductContext);

  // Calculate total price before discount
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calculate total discount
  const totalDiscount = cartItems.reduce(
    (sum, item) => sum + (item.price - item.discountedPrice) * item.quantity,
    0
  );

  // Calculate total to pay
  const totalToPay = totalPrice - totalDiscount;

  // Increase quantity handler
  const handleIncreaseQuantity = (item) => {
    addToCart(item);
  };

  // Decrease quantity handler
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    totalPrice,
    totalDiscount,
    totalToPay,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
}
