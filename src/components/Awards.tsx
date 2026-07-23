const awards = [
  {
    title: '2023 Agrihack Challenge — Overall Winner',
    org: 'The Rallying Cry, Alliance of Bioversity International–CIAT & AICCRA',
  },
  {
    title: 'Presidential Recognition',
    org: 'Recognized by H.E. President William Ruto for impact on food security',
  },
  {
    title: 'TotalEnergies Startupper of the Year — First Runner-up',
    org: 'TotalEnergies Kenya',
  },
  {
    title: 'Africa Prize for Engineering Innovation — 2025 Cohort',
    org: 'Royal Academy of Engineering',
  },
]

function Awards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold tracking-wide text-leaf-700 uppercase">
          Recognition
        </span>
        <h2 className="mt-3 text-3xl font-bold text-stone-900">
          Backed by industry and government recognition
        </h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {awards.map((a) => (
          <div
            key={a.title}
            className="flex gap-4 rounded-xl border border-stone-200 p-6"
          >
            <svg
              className="h-8 w-8 shrink-0 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15a5 5 0 100-10 5 5 0 000 10zM8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-stone-900">{a.title}</h3>
              <p className="mt-1 text-sm text-stone-500">{a.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards
