const stats = [
  { value: '6,500+', label: 'Farmers supported, up from 20 in 2020' },
  { value: '40%', label: 'Reduction in post-harvest losses' },
  { value: '33%', label: "Kenya's estimated annual produce loss we're tackling" },
  { value: '12,000', label: 'Farmers we aim to reach within 3 years' },
]

function Impact() {
  return (
    <section id="impact" className="bg-stone-900 text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wide text-amber-400 uppercase">
            Impact
          </span>
          <h2 className="mt-3 text-3xl font-bold">
            Real reach, from Machakos to a national scale
          </h2>
          <p className="mt-4 text-stone-300">
            In partnership with organizations like Inades-Formation Kenya, we've
            equipped farmers across Kityi, Machakos, Makueni and Kajiado — and
            we're just getting started.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-amber-400">{s.value}</div>
              <p className="mt-2 text-sm text-stone-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
