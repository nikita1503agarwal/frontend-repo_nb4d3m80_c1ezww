import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
        <div className="absolute top-24 -right-24 w-96 h-96 rounded-full bg-red-500 blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Star Kebab & Pizza
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Fresh döner kebabs, handmade pizzas, and crispy sides. Fast takeaway, affordable prices, open late.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/menu" className="px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Order Now</Link>
            <Link to="/menu" className="px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20">See Menu</Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-200">
            {['Fresh ingredients','Fast takeaway','Affordable prices','Open late'].map((item) => (
              <li key={item} className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2">
                <span className="text-amber-400">✅</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-white/10 p-2">
            <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
