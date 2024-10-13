import Logo from './Logo';
import SearchBar from "./SearchBar";
import Contact from "./ContactUs";
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';
import CartSidebar from './CartSideBar';
import { useLocation } from 'react-router-dom';



function Navbar() {
  const location = useLocation();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 w-[1440px] z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        {location.pathname === "/" && <SearchBar />}

        <div className="flex items-center space-x-6">
          <Contact />
          <ShoppingCart onClick={toggleCart}/>
        </div>
        <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      </div>
    </nav>
  );
}

export default Navbar;
