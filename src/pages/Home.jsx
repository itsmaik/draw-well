import ProductCard from "../components/ProductCard";
import { CARD_CONTENT } from "../data/dataTest";
import SectionImg from "../components/SectionImg";

function HomePage() {
  return (
    <main>
      <section className="flex gap-6">
        <ProductCard {...CARD_CONTENT[0]} />
        <ProductCard {...CARD_CONTENT[0]} />
        <ProductCard {...CARD_CONTENT[0]} />
        <ProductCard {...CARD_CONTENT[0]} />
      </section>
      <section>
        <SectionImg />
      </section>
    </main>
  );
}

export default HomePage;
