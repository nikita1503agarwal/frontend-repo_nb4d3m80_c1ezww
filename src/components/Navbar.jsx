import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/10'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-400 to-red-500 grid place-items-center shadow-lg shadow-red-500/20">
              <span className="text-white font-black">★</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Star Kebab & Pizza</p>
              <p className="text-xs text-slate-300">Vienna, Austria</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClasses} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+43600123456" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors">
              <Phone size={16} /> Call Us
            </a>
            <a href="https://maps.google.com/?q=Star+Kebab+%26+Pizza+Vienna" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors">
              <MapPin size={16} /> Get Directions
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md text-slate-200 hover:bg-white/10">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClasses} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:+43600123456" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors">
                <Phone size={16} /> Call Us
              </a>
              <a href="https://maps.google.com/?q=Star+Kebab+%26+Pizza+Vienna" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors">
                <MapPin size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
