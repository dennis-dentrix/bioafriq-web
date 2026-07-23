const services = [
  {
    title: 'Dehydration-as-a-Service',
    description:
      'Don’t need to own a dryer? Bring your harvest to one of our climate-smart drying hubs and pay only for the drying capacity you use — no upfront equipment cost.',
    points: [
      'Pay-per-use access to hybrid solar drying capacity',
      'Community drying hubs near farming clusters',
      'Quality-controlled, consistent drying output',
    ],
  },
  {
    title: 'Farmer Training',
    description:
      'Equipment alone doesn’t solve post-harvest loss. We train farmers hands-on in food preservation, dehydration techniques and sustainable practices.',
    points: [
      'Hands-on tomato and produce dehydration training',
      'Food preservation and post-harvest handling skills',
      'Delivered in partnership with local cooperatives and NGOs',
    ],
  },
]

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold tracking-wide text-leaf-700 uppercase">
          Services
        </span>
        <h2 className="mt-3 text-3xl font-bold text-stone-900">
          More than machines — a full drying ecosystem
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-leaf-950 text-white p-8 flex flex-col"
          >
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-4 text-leaf-100/80 text-sm leading-relaxed">
              {s.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-leaf-100/90">
              {s.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {pt}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
