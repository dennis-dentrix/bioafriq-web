function Contact() {
  return (
    <section id="contact" className="bg-leaf-950 text-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-semibold tracking-wide text-amber-400 uppercase">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-bold">
            Ready to stop losing your harvest?
          </h2>
          <p className="mt-4 text-leaf-100/80 max-w-md">
            Whether you're a farmer, cooperative, NGO or investor — tell us
            what you need and our team in Machakos will get back to you.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-amber-400">Phone</span>
              <a href="tel:+254750885648" className="hover:underline">
                +254 750 885 648
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400">Email</span>
              <a href="mailto:info@bioafriqenergy.com" className="hover:underline">
                info@bioafriqenergy.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400">Location</span>
              <span>Machakos County, Kenya</span>
            </div>
          </div>
        </div>

        <form
          className="bg-white rounded-2xl p-8 text-stone-900"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4">
            <label className="text-sm font-medium">
              Name
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-600"
              />
            </label>
            <label className="text-sm font-medium">
              Email
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-600"
              />
            </label>
            <label className="text-sm font-medium">
              I'm interested in
              <select className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-600">
                <option>Hybrid Solar Dryer</option>
                <option>Portable Solar Dryer</option>
                <option>BSF Dryer</option>
                <option>Dehydration-as-a-Service</option>
                <option>Farmer Training</option>
                <option>Partnership / Investment</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Message
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-600"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-stone-900 hover:bg-amber-400 transition-colors"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
