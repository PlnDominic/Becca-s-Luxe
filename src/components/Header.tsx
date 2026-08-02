"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Occasions", href: "#occasions" },
  { label: "Products", href: "#products" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
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
        scrolled ? "bg-luxe-cream/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-4">
        <a href="#home" className="font-display text-2xl sm:text-3xl text-luxe-rose">
          Becca&apos;s <span className="font-script text-luxe-mauve">Luxe</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium text-luxe-ink hover:text-luxe-rose transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#order" className="btn-primary !py-3 !px-6">
            Order Now
          </a>
        </nav>

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

      {menuOpen && (
        <div className="md:hidden bg-luxe-cream border-t border-luxe-rose/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-medium text-luxe-ink hover:text-luxe-rose transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#order" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
