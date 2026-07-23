function VideoShowcase() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs font-semibold tracking-wide text-leaf-700 uppercase">
          See it in action
        </span>
        <h2 className="mt-3 text-3xl font-bold text-stone-900">
          Inside a BioAfriq drying hub
        </h2>
        <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
          A look at how our hybrid solar dryers operate on the ground in
          Machakos County — from harvest to shelf-stable product.
        </p>

        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-black">
          <video
            src="/video.mp4"
            poster="/video-poster.jpg"
            controls
            preload="metadata"
            className="w-full aspect-video"
          >
            Your browser does not support embedded video.
          </video>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
