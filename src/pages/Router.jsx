import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import NotFound from '../components/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
