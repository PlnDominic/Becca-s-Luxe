"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "./icons";

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    router.push(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
  }

  return (
    <section id="home" className="pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative h-[420px] sm:h-[480px] rounded-[2.5rem] overflow-hidden bg-luxe-ink">
          <Image
            src="/images/hero-shopping.jpg"
            alt="Woman smiling while carrying Becca's Luxe gift bags"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative -mt-16 sm:-mt-20 mx-auto max-w-4xl bg-white border border-luxe-ink/10 rounded-3xl shadow-xl px-6 sm:px-10 py-8 sm:py-10 text-center">
          <p className="section-eyebrow mb-2">Creating Beautiful Memories</p>
          <h1 className="font-display text-2xl sm:text-3xl text-luxe-ink">
            Give Every Occasion A Beautiful Memory
          </h1>
          <p className="mt-3 text-sm sm:text-base text-luxe-ink/70 max-w-xl mx-auto">
            Premium custom souvenirs for weddings, christenings, birthdays,
            funerals, anniversaries, corporate events and more.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-6 flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto"
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
  );
}
