export default function HoursBanner() {
  return (
    <div className="border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300 text-sm">
        <p>Open daily 11:00 – 23:00</p>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">Fast takeaway</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">Family atmosphere</span>
        </div>
      </div>
    </div>
  )
}
