import Logo from './Logo'
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import ShoppingCart from './ShoppingCart';

function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <SearchBar />

        <div className="flex items-center space-x-6">
          <Favorites />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
