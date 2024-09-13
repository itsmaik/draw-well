import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg"; // Assuming you have this component

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <Navbar />
      {/* Render HeroImg only if the current path is the homepage */}
      {location.pathname === "/" && <HeroImg />}
    </header>
  );
}
