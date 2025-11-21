export default function Menu() {
  const sections = [
    {
      title: 'Kebab',
      items: [
        { name: 'Döner Kebab', desc: 'Chicken, Beef, or Mixed with fresh salad and sauces' },
        { name: 'Kebab Teller', desc: 'With fries or rice, salad, and sauces' },
        { name: 'Falafel Wrap', desc: 'Crispy falafel, salad, tahini or garlic sauce' },
        { name: 'Lahmacun', desc: 'Turkish flatbread with minced meat and herbs' },
      ],
    },
    {
      title: 'Pizza',
      items: [
        { name: 'Margherita', desc: 'Tomato, mozzarella, basil' },
        { name: 'Salami', desc: 'Tomato, mozzarella, salami' },
        { name: 'Funghi', desc: 'Tomato, mozzarella, mushrooms' },
        { name: 'Prosciutto', desc: 'Tomato, mozzarella, ham' },
        { name: 'Pepperoni', desc: 'Tomato, mozzarella, pepperoni' },
        { name: 'Calzone', desc: 'Folded pizza stuffed with your favorites' },
      ],
    },
    {
      title: 'Sides',
      items: [
        { name: 'Fries', desc: 'Golden and crispy' },
        { name: 'Onion Rings', desc: 'Crispy battered rings' },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Coca-Cola' },
        { name: 'Fanta' },
        { name: 'Sprite' },
        { name: 'Ayran' },
        { name: 'Iced Tea' },
      ],
    },
  ]

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">Menu</h1>
        <p className="text-slate-400 mt-2">Big portions, great prices, always fresh.</p>
      </header>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-2xl font-semibold text-white mb-4">{s.title}</h2>
            <ul className="divide-y divide-white/10 rounded-xl border border-white/10 bg-slate-950">
              {s.items.map((i) => (
                <li key={i.name} className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-white font-medium">{i.name}</p>
                    {i.desc && <p className="text-slate-400 text-sm">{i.desc}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
