import heroDryers from '../assets/images/hero-dryers.jpg'
import daas from '../assets/images/daas.jpg'
import bsfDryer from '../assets/images/bsf-dryer.jpg'

type Product = {
  name: string
  tagline: string
  description: string
  features: string[]
  image?: string
  cta?: string
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
    name: 'Dehydration-as-a-Service',
    image: daas,
    tagline: 'No dryer? No problem.',
    description:
      'Bring your harvest to a BioAfriq climate-smart drying hub and pay only for the drying capacity you use — no equipment purchase required.',
    features: [
      'Pay-per-use access to hybrid solar drying capacity',
      'Community drying hubs built near farming clusters',
      'Quality-controlled, consistent drying output',
      'Ideal for farmer groups, cooperatives and processors',
    ],
    cta: 'Find a drying hub',
  },
  {
    name: 'Hybrid Solar BSF Dryer',
    image: bsfDryer,
    tagline: 'Efficiently dry, reliably preserve',
    description:
      'A rugged, solar-powered dryer purpose-built for Black Soldier Fly larvae — turning organic waste into a high-value, feed-grade protein source.',
    features: [
      'Capacity: 50 kg of larvae per hour',
      'Solar power with biomass/electric backup',
      'Durable cabinet design, easy to operate',
      'Cuts post-harvest losses and boosts feed value',
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
            Dehydration technology and services built for African farms
          </h2>
          <p className="mt-4 text-stone-600">
            Own a dryer, or use ours — every option is engineered to work
            with the realities of smallholder farming: unreliable grid
            power, seasonal harvests, and the need to earn from every crop.
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
                {p.cta ?? 'Request a quote'} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
