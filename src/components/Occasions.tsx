const OCCASIONS = [
  { name: "Weddings", color: "bg-luxe-blush" },
  { name: "Baby Christenings", color: "bg-luxe-sage/20" },
  { name: "Birthday Parties", color: "bg-luxe-lavender/20" },
  { name: "Funerals", color: "bg-luxe-mauve/10" },
  { name: "Anniversaries", color: "bg-luxe-blush" },
  { name: "Corporate Events", color: "bg-luxe-sage/20" },
  { name: "Naming Ceremonies", color: "bg-luxe-lavender/20" },
  { name: "Social Celebrations", color: "bg-luxe-mauve/10" },
];

export default function Occasions() {
  return (
    <section id="occasions" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="section-eyebrow mb-3">Every Milestone Matters</p>
        <h2 className="section-heading">Occasions We Celebrate</h2>
        <p className="mt-4 text-luxe-ink/70 max-w-2xl mx-auto">
          Whatever the celebration, we craft keepsakes that make the moment
          unforgettable.
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {OCCASIONS.map((occasion) => (
            <div
              key={occasion.name}
              className={`${occasion.color} border border-luxe-rose/10 py-10 px-4 flex items-center justify-center text-center transition-transform hover:-translate-y-1`}
            >
              <span className="font-display text-lg sm:text-xl text-luxe-ink">
                {occasion.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
