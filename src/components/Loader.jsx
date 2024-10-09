export default function Loader() {
  console.log("testing loading");
  return (
    <div className="flex justify-center items-center min-h-screen fixed top-0 z-50 min-w-full bg-slate-50/75">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      <p className="ml-4 text-xl">Loading products...</p>
    </div>
  );
}