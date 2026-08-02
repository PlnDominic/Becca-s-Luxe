export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="section-eyebrow mb-3">Who We Are</p>
        <h2 className="section-heading">Creating Beautiful Memories</h2>
        <p className="mt-6 text-luxe-ink/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Becca&apos;s Luxe is a premium custom souvenir studio based in Taifa,
          Accra. We design and craft personalized keepsakes that capture the
          heart of every celebration &mdash; from joyful weddings and baby
          christenings to solemn remembrances and corporate milestones. Each
          piece is made with care, quality materials, and an eye for elegant
          detail, so your guests carry home more than a gift &mdash; they carry
          a memory.
        </p>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          <div className="border-t-2 border-luxe-rose pt-6">
            <h3 className="font-display text-3xl text-luxe-rose">100%</h3>
            <p className="mt-2 text-sm uppercase tracking-widest text-luxe-ink/70">
              Personalized Designs
            </p>
          </div>
          <div className="border-t-2 border-luxe-sage pt-6">
            <h3 className="font-display text-3xl text-luxe-rose">8+</h3>
            <p className="mt-2 text-sm uppercase tracking-widest text-luxe-ink/70">
              Occasions Covered
            </p>
          </div>
          <div className="border-t-2 border-luxe-lavender pt-6">
            <h3 className="font-display text-3xl text-luxe-rose">Handcrafted</h3>
            <p className="mt-2 text-sm uppercase tracking-widest text-luxe-ink/70">
              Quality & Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
