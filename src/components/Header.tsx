"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Occasions", href: "/#occasions" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-4">
        <Link href="/#home" className="font-display text-2xl sm:text-3xl text-luxe-rose">
          Becca&apos;s <span className="font-script text-luxe-mauve">Luxe</span>
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
          <CartButton />
          <Link href="/shop" className="btn-primary !py-3 !px-6">
            Shop Now
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <CartButton />
          <button
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="w-6 h-0.5 bg-luxe-ink" />
            <span className="w-6 h-0.5 bg-luxe-ink" />
            <span className="w-6 h-0.5 bg-luxe-ink" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-luxe-rose/20 px-6 py-4 flex flex-col gap-4">
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
          <Link href="/shop" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
