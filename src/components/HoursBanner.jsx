export default function HoursBanner() {
  return (
    <div className="bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-200 text-sm">
        <p>Open daily 11:00 – 23:00</p>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Fast takeaway</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">Family atmosphere</span>
        </div>
      </div>
    </div>
  )
}
