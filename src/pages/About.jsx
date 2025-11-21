export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="text-slate-300 mt-2">A friendly family-owned spot serving Vienna since day one.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800/60">
          <img src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1200&auto=format&fit=crop" alt="Restaurant" className="w-full h-full object-cover" />
        </div>
        <div className="text-slate-200 space-y-4">
          <p>We’re proud to serve fresh döner kebabs, handmade pizzas, and crispy sides made with quality ingredients. Our focus is fast service, generous portions, and honest prices.</p>
          <p>Whether you’re grabbing lunch, dinner, or a late-night snack, our team is here to make it quick and delicious.</p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {['Fresh ingredients','Fast takeaway','Affordable prices','Open late','Family atmosphere'].map((p) => (
              <li key={p} className="bg-white/5 border border-white/10 rounded-md px-3 py-2">✅ {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
