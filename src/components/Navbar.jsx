import Logo from './Logo';
import SearchBar from "./SearchBar";
import Contact from "./ContactUs";
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';
import CartSidebar from './CartSideBar';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <nav className="bg-white p-5 shadow-md fixed top-0 w-full max-w-[1440px] z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        {location.pathname === "/" && (
          <div className="hidden md:contents">
            <SearchBar />
          </div>
        )}

        <div className="flex items-center space-x-6">
          <div className="hidden md:block">
            <Contact />
          </div>
          <div className="md:hidden">
            <Link to="/contact" aria-label="Contact Us">
              <FaPhone className="text-xl text-gray-600" />
            </Link>
          </div>

          <ShoppingCart onClick={toggleCart} />
        </div>

        <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      </div>
      <div>
        {location.pathname === "/" && (
          <div className="mt-6 flex justify-center min-w-full md:hidden">
            <SearchBar />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
