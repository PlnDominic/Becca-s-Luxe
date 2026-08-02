"use client";

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
        <div className="relative h-[420px] sm:h-[480px] overflow-hidden bg-gradient-to-br from-luxe-rose via-luxe-mauve to-luxe-lavender flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.15),transparent_50%)]" />
          <h1 className="relative font-display text-[20vw] sm:text-[10rem] leading-none text-white/90 select-none">
            Luxe
          </h1>
        </div>

        <div className="relative -mt-16 sm:-mt-20 mx-auto max-w-4xl bg-white border border-luxe-ink/10 shadow-xl px-6 sm:px-10 py-8 sm:py-10 text-center">
          <p className="section-eyebrow mb-2">Creating Beautiful Memories</p>
          <h2 className="font-display text-2xl sm:text-3xl text-luxe-ink">
            Give Every Occasion A Beautiful Memory
          </h2>
          <p className="mt-3 text-sm sm:text-base text-luxe-ink/70 max-w-xl mx-auto">
            Premium custom souvenirs for weddings, christenings, birthdays,
            funerals, anniversaries, corporate events and more.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-6 flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto"
          >
            <div className="flex-1 flex items-center gap-2 border border-luxe-ink/20 px-4">
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
