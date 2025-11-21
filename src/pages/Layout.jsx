import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
