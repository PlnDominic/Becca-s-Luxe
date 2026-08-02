"use client";

import { useCart } from "@/context/CartContext";

export default function CartButton({ className = "" }: { className?: string }) {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      aria-label="Open cart"
      className={`relative flex items-center gap-2 text-luxe-ink hover:text-luxe-rose transition-colors ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h1.5l1.5 12.6a1.5 1.5 0 001.5 1.4h9a1.5 1.5 0 001.5-1.3L20 8H6"
        />
        <circle cx="9.5" cy="20" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="17" cy="20" r="1.25" fill="currentColor" stroke="none" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-luxe-rose text-white text-[10px] w-5 h-5 flex items-center justify-center font-semibold">
          {totalItems}
        </span>
      )}
    </button>
  );
}
