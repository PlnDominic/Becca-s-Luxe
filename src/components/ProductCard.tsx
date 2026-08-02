"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="bg-white border border-luxe-rose/10 flex flex-col hover:shadow-xl transition-shadow">
      <div
        className={`${product.color} h-48 flex items-center justify-center border-b border-luxe-rose/10`}
      >
        <span className="font-script text-2xl text-luxe-ink/70">{product.tag}</span>
      </div>

      <div className="p-6 flex flex-col gap-2 flex-1">
        <span className="section-eyebrow !text-luxe-sage">{product.category}</span>
        <h3 className="font-display text-xl text-luxe-ink">{product.name}</h3>
        <p className="text-sm text-luxe-ink/70 leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg text-luxe-rose">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className="border-2 border-luxe-rose text-luxe-rose px-4 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-luxe-rose hover:text-white transition-colors"
          >
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
