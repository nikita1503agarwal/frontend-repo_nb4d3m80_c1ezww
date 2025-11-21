export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-slate-300">
        <div>
          <p className="text-white font-semibold">Star Kebab & Pizza</p>
          <p className="text-sm mt-2">Family-owned kebab and pizza in Vienna. Fresh ingredients, fast service, big portions.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Opening Hours</h4>
          <p className="text-sm">Monday – Sunday</p>
          <p className="text-sm">11:00 – 23:00</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Contact</h4>
          <p className="text-sm">Phone: <a className="text-white hover:underline" href="tel:+43600123456">+43 600 123 456</a></p>
          <a className="text-sm text-white hover:underline" href="https://maps.google.com/?q=Star+Kebab+%26+Pizza+Vienna" target="_blank" rel="noreferrer">Google Maps</a>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">Quick Actions</h4>
          <div className="flex flex-wrap gap-2">
            <a href="/menu" className="px-3 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20">See Menu</a>
            <a href="tel:+43600123456" className="px-3 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20">Call Us</a>
            <a href="https://maps.google.com/?q=Star+Kebab+%26+Pizza+Vienna" className="px-3 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20" target="_blank" rel="noreferrer">Get Directions</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Star Kebab & Pizza • Vienna</div>
    </footer>
  )
}
