import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

export default function SearchBar () {

  const { setSearchQuery } = useContext(ProductContext);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
  };

  return (
    <div className="flex items-center w-1/2 bg-gray-100 rounded-full">
      <input
        aria-label="Search Products"
        type="text"
        placeholder="What are you looking for today?"
        value={query}
        onChange={handleInputChange}
        className="bg-transparent w-full px-4 py-2 focus:outline-none"
      />
      <button className="bg-orange-500 text-white py-3 px-6 rounded-full m-1">
        <FaSearch />
      </button>
    </div>
  )
}