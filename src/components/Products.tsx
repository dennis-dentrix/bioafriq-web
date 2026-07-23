import heroDryers from '../assets/images/hero-dryers.jpg'

type Product = {
  name: string
  tagline: string
  description: string
  features: string[]
  image?: string
}

const products: Product[] = [
  {
    name: 'Hybrid Solar Dryer',
    image: heroDryers,
    tagline: 'Year-round drying, rain or shine',
    description:
      'Combines solar power, biomass heating and electric backup so drying never stops — even on cloudy days or after dark.',
    features: [
      'UV-treated poly covering for heat retention',
      'Solar-powered fans for even air circulation',
      'Biomass heater runs on agri-waste (maize cobs, rice husks)',
      'Digital temperature control',
      'Extends shelf life of produce up to 12 months',
    ],
  },
  {
    name: 'Portable Solar Dryer',
    tagline: 'Take drying to the farm',
    description:
      'A lightweight, easy-to-move dehydrator built for smallholder farmers and households who need flexible, on-site drying.',
    features: [
      'Compact and easily transportable',
      'Dries a wide variety of fruits, vegetables and herbs',
      'Low-cost entry point for individual farmers',
      'Simple to operate, no technical training required',
    ],
  },
  {
    name: 'Black Soldier Fly (BSF) Dryer',
    tagline: 'Closing the loop on organic waste',
    description:
      'Purpose-built drying for Black Soldier Fly larvae, turning organic waste streams into a circular-economy protein source for animal feed.',
    features: [
      'Supports circular, waste-to-value production',
      'Consistent drying for feed-grade output',
      'Designed for BSF and feed producers',
    ],
  },
]

function Products() {
  return (
    <section id="products" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wide text-leaf-700 uppercase">
            Products
          </span>
          <h2 className="mt-3 text-3xl font-bold text-stone-900">
            Dehydration technology built for African farms
          </h2>
          <p className="mt-4 text-stone-600">
            Every dryer is engineered to work with — not against — the
            realities of smallholder farming: unreliable grid power,
            seasonal harvests, and the need to earn from every crop.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 rounded-xl overflow-hidden bg-linear-to-br from-leaf-100 to-amber-100 flex items-center justify-center mb-6">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-stone-400">Product photo coming soon</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-stone-900">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-leaf-700">{p.tagline}</p>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed">{p.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-stone-600">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-semibold text-leaf-700 hover:text-leaf-900"
              >
                Request a quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
