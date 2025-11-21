export default function MenuGrid() {
  const sections = [
    {
      title: 'Kebab',
      items: [
        'Döner Kebab (Chicken, Beef, Mixed)',
        'Kebab Teller with fries or rice',
        'Falafel Wrap',
        'Lahmacun',
      ],
      color: 'from-amber-400 to-red-500',
    },
    {
      title: 'Pizza',
      items: [
        'Margherita',
        'Salami',
        'Funghi',
        'Prosciutto',
        'Pepperoni',
        'Calzone',
      ],
      color: 'from-emerald-400 to-cyan-500',
    },
    {
      title: 'Sides',
      items: ['Fries', 'Onion Rings'],
      color: 'from-fuchsia-400 to-pink-500',
    },
    {
      title: 'Drinks',
      items: ['Coca-Cola', 'Fanta', 'Sprite', 'Ayran', 'Iced Tea'],
      color: 'from-indigo-400 to-sky-500',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Menu Highlights</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl bg-slate-800/60 border border-white/10 overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${s.color}`}></div>
            <div className="p-5">
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <ul className="text-slate-200 text-sm space-y-1">
                {s.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
