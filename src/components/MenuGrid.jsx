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
    },
    {
      title: 'Sides',
      items: ['Fries', 'Onion Rings'],
    },
    {
      title: 'Drinks',
      items: ['Coca-Cola', 'Fanta', 'Sprite', 'Ayran', 'Iced Tea'],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Menu Highlights</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-xl bg-slate-900 border border-white/10 p-5">
            <h3 className="text-white font-semibold mb-2">{s.title}</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              {s.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
