import heroDryers from '../assets/images/hero-dryers.jpg'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-leaf-950 text-white">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#f6a01c_0,transparent_35%),radial-gradient(circle_at_80%_60%,#ef5a28_0,transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-leaf-800/60 px-4 py-1 text-xs font-semibold tracking-wide text-leaf-200 uppercase">
            Machakos, Kenya · Since 2017
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Sun-powered drying that stops harvests from going to waste
          </h1>
          <p className="mt-6 text-lg text-leaf-100/90 max-w-xl">
            BioAfriq Energy builds hybrid solar dryers that turn surplus fruit,
            vegetables and grain into shelf-stable products — cutting
            post-harvest losses by up to 40% and giving smallholder farmers a
            new source of income, year-round.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-stone-900 hover:bg-amber-400 transition-colors"
            >
              Explore our dryers
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Talk to our team
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="sr-only">Farmers supported</dt>
              <dd className="text-2xl font-bold text-amber-400">6,500+</dd>
              <p className="text-xs text-leaf-100/70 mt-1">Farmers supported</p>
            </div>
            <div>
              <dt className="sr-only">Loss reduction</dt>
              <dd className="text-2xl font-bold text-amber-400">40%</dd>
              <p className="text-xs text-leaf-100/70 mt-1">Fewer post-harvest losses</p>
            </div>
            <div>
              <dt className="sr-only">Shelf life</dt>
              <dd className="text-2xl font-bold text-amber-400">12mo</dd>
              <p className="text-xs text-leaf-100/70 mt-1">Extended shelf life</p>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-md justify-self-center rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <img
            src={heroDryers}
            alt="BioAfriq hybrid solar dryers deployed in the field, Machakos County"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-leaf-950/70 via-leaf-950/0 to-leaf-950/10" />
          <p className="absolute bottom-4 left-4 right-4 text-xs text-leaf-100/80">
            Hybrid solar dryers deployed with a drying hub in Machakos County
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
