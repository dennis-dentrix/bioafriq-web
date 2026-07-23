import qualityControl from '../assets/images/quality-control.jpg'

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
          <img
            src={qualityControl}
            alt="BioAfriq team measuring dried produce for quality assurance"
            className="aspect-4/3 w-full object-cover"
          />
          <p className="absolute bottom-0 inset-x-0 bg-stone-950/60 text-white text-xs px-4 py-2">
            Quality checks on dried produce in the field
          </p>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-xs font-semibold tracking-wide text-leaf-700 uppercase">
            Our story
          </span>
          <h2 className="mt-3 text-3xl font-bold text-stone-900">
            From a mother's wasted harvest to a national movement
          </h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            BioAfriq Energy was founded in 2017 by mechanical engineer{' '}
            <span className="font-semibold text-stone-800">James Nyamai</span>{' '}
            after watching his mother's tomato harvest rot for lack of a way
            to preserve it. What started with vegetable and poultry farming
            became a mission to solve one of Kenya's most stubborn
            problems: an estimated 33% of produce is lost every year before
            it ever reaches a market.
          </p>
          <blockquote className="mt-6 border-l-4 border-amber-500 pl-4 italic text-stone-700">
            "My mother had all this crop that was going to waste, and I
            thought, why not dry it to create pumpkin flour and have
            something different to sell?"
            <footer className="mt-2 not-italic text-sm text-stone-500">
              — James Nyamai, Founder &amp; Managing Director
            </footer>
          </blockquote>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Today, from a production facility in Machakos County, BioAfriq
            designs and builds hybrid solar dryers, runs climate-smart
            drying hubs, and trains farmers across Kenya — turning
            post-harvest loss into income, and food waste into a circular
            economy.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
