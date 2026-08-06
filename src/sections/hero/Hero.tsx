export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center spotlight">
      <div className="relative z-10 pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-paper leading-[0.95] tracking-tight">
          Sound.
          <br />
          Light.
          <br />
          Vision.
        </h1>

        <p className="mt-8 text-mute text-lg md:text-xl max-w-lg leading-relaxed">
          Excellence in sound, lighting, and visual experiences for events across South Africa.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-void text-sm font-medium px-6 py-3 hover:bg-gold/90 transition-colors duration-200"
          >
            Start a Project
          </a>
          <a
            href="/work"
            className="inline-flex items-center gap-2 border border-white/15 text-paper text-sm px-6 py-3 hover:border-white/30 transition-colors duration-200"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
