import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutSuccess() {
  const { setCartItems } = useContext(ProductContext);

  
  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Order Successful!</h1>
      <p className="text-lg mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link to="/" className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-semibold">
        Back to Store
      </Link>
    </div>
  );
}
