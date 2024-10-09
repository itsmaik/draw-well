export default function Error ({error}) {
  return(
    <div className="flex justify-center items-center min-h-screen fixed top-0 z-50 min-w-full bg-slate-50">
      <p className="text-3xl font-semibold text-red-500">{error}</p>
    </div>
  )
}