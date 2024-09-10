import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from '../assets/draw-well.svg'

function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Center - Search Bar */}
        <div className="flex items-center w-1/2 bg-gray-100 rounded-full">
          <input
            type="text"
            placeholder="What are you looking for today?"
            className="bg-transparent w-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-orange-500 text-white py-3 px-6 rounded-full m-1">
            <FaSearch />
          </button>
        </div>

        {/* Right - Favorites and Cart */}
        <div className="flex items-center space-x-6">
          {/* Favorites */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaHeart className="text-gray-600" />
            <span>favorites</span>
          </div>

          {/* Cart */}
          <div className="relative flex items-center cursor-pointer">
            <FaShoppingCart className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
