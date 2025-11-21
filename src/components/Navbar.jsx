import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-white/10 grid place-items-center">
              <span className="text-white font-black">★</span>
            </div>
            <p className="text-white font-semibold">Star Kebab & Pizza</p>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClasses} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md text-slate-300 hover:bg-white/10">
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
          </div>
        </div>
      )}
    </header>
  )
}
