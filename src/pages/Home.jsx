import DisplayAll from "../components/DisplayAll";
import { useEffect } from "react";

function Home() {

  return (
    <main>
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
        <DisplayAll />
      </section>
    </main>
  );
}

export default Home;
