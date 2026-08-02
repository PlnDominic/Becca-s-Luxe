import Link from "next/link";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Products() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="section-eyebrow mb-3">Our Collection</p>
        <h2 className="section-heading">Custom Souvenirs</h2>
        <p className="mt-4 text-luxe-ink/70 max-w-2xl mx-auto">
          Every piece is thoughtfully designed and personalized to fit your
          theme, colors and story. Shop the full collection online.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link href="/shop" className="btn-outline mt-14 inline-flex">
          Visit The Full Shop
        </Link>
      </div>
    </section>
  );
}
