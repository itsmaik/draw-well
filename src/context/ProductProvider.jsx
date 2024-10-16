import { useEffect, createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ProductContext = createContext();


export function ProductProvider({ children }) {

  const { data: products, loading, error } = useFetch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!products || loading) return;

    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (trimmedQuery === "") {
      setSearchResults(products);
    } else {
      const filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(trimmedQuery) ||
          product.description.toLowerCase().includes(trimmedQuery)
      );
      setSearchResults(filteredProducts);
    }
  }, [searchQuery, products, loading]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <ProductContext.Provider value={{ searchQuery, products, searchResults, loading, error, setSearchQuery, cartItems, addToCart, updateCartItemQuantity,removeFromCart, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
}


export default function Providers({ children }) {
  return <ProductProvider>{children}</ProductProvider>;
}
