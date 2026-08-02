"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <main>
      <Header />

      <section className="pt-40 pb-16 bg-luxe-blush/40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-3">Shop The Collection</p>
          <h1 className="section-heading">Custom Souvenirs Storefront</h1>
          <p className="mt-4 text-luxe-ink/70">
            Browse our ready-to-personalize keepsakes and add your favorites to
            the cart. Every item can be customized with names, dates and colors
            for your occasion.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold border-2 transition-colors ${
                  activeCategory === category
                    ? "bg-luxe-rose border-luxe-rose text-white"
                    : "border-luxe-rose/30 text-luxe-ink hover:border-luxe-rose"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-luxe-ink/60 mt-10">
              No products found in this category yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
