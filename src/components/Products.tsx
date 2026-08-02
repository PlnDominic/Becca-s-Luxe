const PRODUCTS = [
  { name: "Tote Bags", desc: "Canvas totes personalized with your special message.", tag: "Bride & Guests" },
  { name: "Tumblers & Mugs", desc: "Insulated tumblers and ceramic mugs for daily reminders.", tag: "Best Day Ever" },
  { name: "Water Bottles", desc: "Stainless steel bottles to stay hydrated in style.", tag: "Stay Inspired" },
  { name: "Gift Boxes", desc: "Ribboned keepsake boxes for thank-you gifts.", tag: "With Love" },
  { name: "Journals & Pens", desc: "Custom notebooks to dream, plan and do.", tag: "Dream Plan Do" },
  { name: "Throw Pillows", desc: "Soft accent pillows with meaningful quotes.", tag: "Love Makes A Family" },
  { name: "Scented Candles", desc: "Hand-poured candles for remembrance and joy.", tag: "Forever In Our Hearts" },
  { name: "Keepsake Boxes", desc: "Elegant boxes to honor loved ones.", tag: "In Loving Memory" },
  { name: "Towels", desc: "Plush towels personalized for celebrations.", tag: "Thank You" },
  { name: "Acrylic Keychains", desc: "Small tokens to remember every moment.", tag: "A Moment to Remember" },
  { name: "Photo Frames", desc: "Display memories that last forever.", tag: "Memories That Last" },
  { name: "Tissue Boxes", desc: "Beautifully designed boxes for happy tears.", tag: "Tissues of Love" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-luxe-blush/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="section-eyebrow mb-3">Our Collection</p>
        <h2 className="section-heading">Custom Souvenirs</h2>
        <p className="mt-4 text-luxe-ink/70 max-w-2xl mx-auto">
          Every piece is thoughtfully designed and personalized to fit your
          theme, colors and story.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="bg-white border border-luxe-rose/10 p-8 flex flex-col gap-3 hover:shadow-xl transition-shadow"
            >
              <span className="section-eyebrow !text-luxe-sage">{product.tag}</span>
              <h3 className="font-display text-2xl text-luxe-ink">{product.name}</h3>
              <p className="text-luxe-ink/70 text-sm leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
