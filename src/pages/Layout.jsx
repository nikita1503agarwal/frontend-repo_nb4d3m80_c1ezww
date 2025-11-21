import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.06),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(239,68,68,0.06),transparent_30%)] pointer-events-none" />
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
