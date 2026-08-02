export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-luxe-lavender/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-luxe-sage/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="section-eyebrow mb-4">Creating Beautiful Memories</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-luxe-rose leading-tight">
          Becca&apos;s Luxe
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-luxe-mauve mt-3">
          Through Custom Souvenirs
        </p>

        <h2 className="mt-10 font-display text-2xl sm:text-3xl md:text-4xl text-luxe-ink">
          Premium Custom Souvenirs for Every Special Occasion
        </h2>
        <p className="mt-6 text-base sm:text-lg text-luxe-ink/70 max-w-2xl mx-auto">
          Designing personalized keepsakes for weddings, baby christenings, birthday
          parties, funerals, anniversaries, corporate events, naming ceremonies and
          social celebrations.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#order" className="btn-primary w-full sm:w-auto">
            Book Your Custom Order
          </a>
          <a href="#products" className="btn-outline w-full sm:w-auto">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
