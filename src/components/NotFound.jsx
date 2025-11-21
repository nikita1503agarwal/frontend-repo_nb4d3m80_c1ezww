import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-black text-white">404</h1>
      <p className="text-slate-300 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400">Back to Home</Link>
    </main>
  )
}
