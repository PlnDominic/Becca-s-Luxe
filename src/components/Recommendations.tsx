"use client";

import { useRef } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export default function Recommendations({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const node = scrollRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section className="py-24 bg-white border-t border-luxe-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-3xl sm:text-4xl text-luxe-ink">
            Explore Our Recommendations
          </h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 border border-luxe-ink/20 flex items-center justify-center hover:border-luxe-ink text-luxe-ink"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 border border-luxe-ink/20 flex items-center justify-center hover:border-luxe-ink text-luxe-ink"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] max-w-[280px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
