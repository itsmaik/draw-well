import DisplayAll from "../components/DisplayAll";
import HeroImg from "../components/HeroImg";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

function Home() {
  const { searchQuery, loading, error } = useContext(ProductContext);

  return (
    <main className="flex flex-col min-h-screen">
      {!searchQuery && !error && !loading && <HeroImg />}
      <section className="container mx-auto">
        <DisplayAll />
      </section>
    </main>
  );
}

export default Home;
