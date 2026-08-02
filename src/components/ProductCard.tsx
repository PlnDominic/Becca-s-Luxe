"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import Rating from "./Rating";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  function handleBuyNow() {
    addItem(product.id);
    router.push("/checkout");
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden flex flex-col group">
      <div className={`relative aspect-square w-full ${product.color} flex items-center justify-center overflow-hidden`}>
        <span className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white border border-neutral-200 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] uppercase tracking-widest font-semibold text-luxe-ink">
          {product.badge}
        </span>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 33vw, 50vw"
            className="object-contain"
          />
        ) : (
          <span className="font-script text-2xl sm:text-3xl text-luxe-ink/50">{product.tag}</span>
        )}
      </div>

      <div className="p-3 sm:p-6 flex flex-col gap-2 sm:gap-3 flex-1">
        <h3 className="font-display text-sm sm:text-xl text-luxe-ink leading-snug">
          {product.name}
        </h3>
        <Rating score={product.rating} reviews={product.reviews} />
        <span className="font-display text-sm sm:text-lg text-luxe-ink">
          {formatPrice(product.price)}
        </span>

        <div className="mt-auto pt-2 flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 border-2 border-luxe-ink text-luxe-ink px-2 py-2 sm:px-4 sm:py-3 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-semibold hover:bg-luxe-ink hover:text-white transition-colors"
          >
            {added ? "Added" : "Add to Chart"}
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-luxe-ink text-white px-2 py-2 sm:px-4 sm:py-3 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-semibold hover:bg-luxe-rose transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
