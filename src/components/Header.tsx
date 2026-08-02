"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import CartButton from "./CartButton";
import { SearchIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    router.push(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
    setSearchOpen(false);
    setQuery("");
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-4">
        <Link href="/#home" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-luxe-ink text-white flex items-center justify-center font-display text-lg">
            B
          </span>
          <span className="font-display text-xl sm:text-2xl text-luxe-ink">
            Becca&apos;s <span className="font-script text-luxe-rose">Luxe</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium text-luxe-ink hover:text-luxe-rose transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            aria-label="Toggle search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden sm:flex text-luxe-ink hover:text-luxe-rose transition-colors"
          >
            <SearchIcon />
          </button>
          <CartButton />
          <Link
            href="/shop"
            className="btn-primary !px-3 !py-1.5 !text-[10px] !tracking-wide whitespace-nowrap md:!px-6 md:!py-3 md:!text-sm md:!tracking-widest"
          >
            Order Now
          </Link>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="w-6 h-0.5 bg-luxe-ink" />
            <span className="w-6 h-0.5 bg-luxe-ink" />
            <span className="w-6 h-0.5 bg-luxe-ink" />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="hidden sm:block border-t border-luxe-ink/10 bg-white">
          <form
            onSubmit={handleSearch}
            className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center gap-3"
          >
            <div className="flex-1 flex items-center gap-2 border border-luxe-ink/20 rounded-full px-4">
              <SearchIcon className="w-5 h-5 text-luxe-ink/40 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for souvenirs..."
                className="w-full py-2.5 focus:outline-none bg-transparent"
              />
            </div>
            <button type="submit" className="btn-primary !py-2.5 !px-5">
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-luxe-ink/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-medium text-luxe-ink hover:text-luxe-rose transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 border border-luxe-ink/20 rounded-full px-4 py-2 focus:outline-none focus:border-luxe-rose"
            />
            <button type="submit" className="btn-primary !py-2 !px-4">
              Go
            </button>
          </form>
          <Link href="/shop" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
