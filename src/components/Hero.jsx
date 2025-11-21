import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            Star Kebab & Pizza
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Fresh döner, handmade pizza, and crispy sides. Quick pickup, fair prices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-200">Order Now</Link>
            <Link to="/menu" className="px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20">See Menu</Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-xl bg-slate-900 border border-white/10 p-2">
            <div className="w-full h-full rounded-lg bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
