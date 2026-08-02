"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/currency";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-96 bg-white border-l border-luxe-rose/20 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-luxe-rose/10">
          <h2 className="font-display text-2xl text-luxe-ink">Your Cart</h2>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="text-luxe-ink/60 hover:text-luxe-rose text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-luxe-ink/60 text-sm mt-8 text-center">
              Your cart is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const product = PRODUCTS.find((p) => p.id === item.id);
                if (!product) return null;
                return (
                  <li key={item.id} className="flex gap-4">
                    <div
                      className={`relative w-16 h-16 rounded-xl shrink-0 overflow-hidden ${product.color} border border-luxe-rose/10`}
                    >
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-lg text-luxe-ink leading-tight">
                        {product.name}
                      </p>
                      <p className="text-sm text-luxe-ink/60">
                        {formatPrice(product.price)}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-luxe-ink/30 text-luxe-ink hover:border-luxe-rose hover:text-luxe-rose"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-luxe-ink/30 text-luxe-ink hover:border-luxe-rose hover:text-luxe-rose"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs uppercase tracking-widest text-luxe-ink/50 hover:text-luxe-rose"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-luxe-rose/10 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-widest text-luxe-ink/70">
                Subtotal
              </span>
              <span className="font-display text-xl text-luxe-ink">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full text-center"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
