import { Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="text-slate-400 mt-2">Get in touch or find us on the map.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-white/10 bg-slate-950 p-6">
          <h2 className="text-white font-semibold mb-2">Call Us</h2>
          <a href="tel:+43600123456" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200">
            <Phone size={18} /> +43 600 123 456
          </a>

          <h2 className="text-white font-semibold mt-6 mb-2">Get Directions</h2>
          <a href="https://maps.google.com/?q=Star+Kebab+%26+Pizza+Vienna" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white font-medium hover:bg-white/20">
            <MapPin size={18} /> Open Google Maps
          </a>

          <p className="text-slate-400 text-sm mt-6">Opening hours: Monday – Sunday, 11:00 – 23:00</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950">
          <iframe
            title="map"
            width="100%"
            height="350"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Vienna%2C%20Austria&output=embed"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
