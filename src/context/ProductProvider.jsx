import { useEffect, createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ProductContext = createContext();


export function ProductProvider({ children }) {

  const { data: products, loading, error } = useFetch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!products) return;
    if (searchQuery === '') {
      setSearchResults(products);
    } else {
      setSearchResults(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, products]);

  return (
    <ProductContext.Provider value={{ products, searchResults, loading, error, setSearchQuery }}>
      {children}
    </ProductContext.Provider>
  );
}


export default function Providers({ children }) {
  return <ProductProvider>{children}</ProductProvider>;
}
