import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-xl border border-white/10 bg-slate-900 p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Hungry? We’ve got you.</h3>
          <p className="text-slate-300 mt-2">Order now for quick pickup or swing by for a cozy bite.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/menu" className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-200">Order Now</Link>
          <a href="tel:+43600123456" className="px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20">Call Us</a>
          <a href="https://maps.google.com/?q=Star+Kebab+%26+Pizza+Vienna" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20">Get Directions</a>
        </div>
      </div>
    </section>
  )
}
