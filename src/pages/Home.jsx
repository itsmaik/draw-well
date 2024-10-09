import DisplayAll from "../components/DisplayAll";

function Home() {

  return (
    <main className="flex flex-col min-h-screen">
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
        <DisplayAll />
      </section>
    </main>
  );
}

export default Home;
