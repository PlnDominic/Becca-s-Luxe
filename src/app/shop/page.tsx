"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import Recommendations from "@/components/Recommendations";
import NewsletterCTA from "@/components/NewsletterCTA";
import { SearchIcon } from "@/components/icons";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/products";

const PAGE_SIZE = 9;

type SortMode = "all" | "new" | "bestseller" | "discount";

const SORT_OPTIONS: { label: string; value: SortMode }[] = [
  { label: "New Arrival", value: "new" },
  { label: "Best Seller", value: "bestseller" },
  { label: "On Discount", value: "discount" },
];

function categoryCount(category: string) {
  if (category === "All") return PRODUCTS.length;
  return PRODUCTS.filter((p) => p.category === category).length;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortMode | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list: Product[] = [...PRODUCTS];

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sort === "new") {
      list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    } else if (sort === "bestseller") {
      list = [...list].sort(
        (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller) || b.reviews - a.reviews
      );
    } else if (sort === "discount") {
      list = list.filter((p) => p.onDiscount);
    }

    return list;
  }, [category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => setPage(1), [category, query, sort]);

  const recommended = useMemo(
    () => PRODUCTS.filter((p) => p.isBestSeller || p.isNew).slice(0, 6),
    []
  );

  return (
    <main>
      <Header />

      <section className="pt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative h-[280px] sm:h-[320px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-luxe-ink via-luxe-mauve to-luxe-rose flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.2),transparent_45%)]" />
            <h1 className="relative font-display text-[22vw] sm:text-8xl text-white/90 select-none">
              Shop
            </h1>
          </div>

          <div className="relative -mt-14 sm:-mt-16 mx-auto max-w-4xl bg-white border border-luxe-ink/10 rounded-3xl shadow-xl px-6 sm:px-10 py-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl text-luxe-ink">
              Give All You Need
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto"
            >
              <div className="flex-1 flex items-center gap-2 border border-luxe-ink/20 rounded-full px-4">
                <SearchIcon className="w-5 h-5 text-luxe-ink/40 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search on Becca's Luxe"
                  className="w-full py-3 focus:outline-none bg-transparent"
                />
              </div>
              <button type="submit" className="btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <div className="border border-luxe-ink/10 rounded-2xl p-6">
              <h3 className="font-display text-xl text-luxe-ink mb-4">Category</h3>
              <ul className="flex flex-col gap-3">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setCategory(cat)}
                      className="flex items-center gap-3 w-full text-left group"
                    >
                      <span
                        className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          category === cat
                            ? "bg-luxe-ink border-luxe-ink"
                            : "border-luxe-ink/30"
                        }`}
                      >
                        {category === cat && (
                          <span className="w-2 h-2 rounded-sm bg-white" />
                        )}
                      </span>
                      <span
                        className={`text-sm flex-1 ${
                          category === cat
                            ? "text-luxe-ink font-semibold"
                            : "text-luxe-ink/70 group-hover:text-luxe-ink"
                        }`}
                      >
                        {cat === "All" ? "All Product" : cat}
                      </span>
                      {cat === "All" ? (
                        <span className="bg-luxe-rose text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                          {categoryCount(cat)}
                        </span>
                      ) : (
                        <span className="text-xs text-luxe-ink/40">
                          {categoryCount(cat)}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-luxe-ink/10 rounded-2xl p-6 mt-6">
              <h3 className="font-display text-xl text-luxe-ink mb-4">Sort By</h3>
              <ul className="flex flex-col gap-3">
                {SORT_OPTIONS.map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() =>
                        setSort((current) => (current === option.value ? null : option.value))
                      }
                      className="flex items-center gap-3 w-full text-left group"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          sort === option.value
                            ? "border-luxe-ink"
                            : "border-luxe-ink/30"
                        }`}
                      >
                        {sort === option.value && (
                          <span className="w-2 h-2 rounded-full bg-luxe-ink" />
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          sort === option.value
                            ? "text-luxe-ink font-semibold"
                            : "text-luxe-ink/70 group-hover:text-luxe-ink"
                        }`}
                      >
                        {option.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {paged.length === 0 ? (
              <div className="border border-luxe-ink/10 rounded-2xl p-14 text-center text-luxe-ink/60">
                No products match your search yet.
              </div>
            ) : (
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
                {paged.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </div>
        </div>
      </section>

      <Recommendations products={recommended} />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
