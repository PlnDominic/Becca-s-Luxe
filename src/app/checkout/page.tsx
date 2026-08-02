"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/currency";

type Status = "idle" | "loading" | "success" | "error";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, items }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      setOrderId(result.orderId);
      clearCart();
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <main>
        <Header />
        <section className="pt-40 pb-24 min-h-[60vh] flex items-center justify-center bg-luxe-blush/40">
          <div className="text-center max-w-lg px-6">
            <p className="section-eyebrow mb-3">Order Received</p>
            <h1 className="section-heading mb-4">Thank You!</h1>
            <p className="text-luxe-ink/70">
              Your order <span className="font-semibold text-luxe-rose">{orderId}</span>{" "}
              has been received. We&apos;ll contact you shortly to confirm details
              and delivery.
            </p>
            <Link href="/shop" className="btn-primary mt-8 inline-flex">
              Continue Shopping
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />

      <section className="pt-40 pb-24 bg-luxe-blush/40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">Almost There</p>
            <h1 className="section-heading">Checkout</h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center bg-white border border-luxe-rose/10 p-14">
              <p className="text-luxe-ink/70 mb-6">Your cart is empty.</p>
              <Link href="/shop" className="btn-primary">
                Browse the Shop
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3 bg-white border border-luxe-rose/10 p-8">
                <h2 className="font-display text-2xl text-luxe-ink mb-6">
                  Delivery Details
                </h2>
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm uppercase tracking-widest text-luxe-ink/70">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="border border-luxe-ink/20 px-4 py-3 focus:outline-none focus:border-luxe-rose"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm uppercase tracking-widest text-luxe-ink/70">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="border border-luxe-ink/20 px-4 py-3 focus:outline-none focus:border-luxe-rose"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm uppercase tracking-widest text-luxe-ink/70">
                      Email (optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="border border-luxe-ink/20 px-4 py-3 focus:outline-none focus:border-luxe-rose"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label htmlFor="address" className="text-sm uppercase tracking-widest text-luxe-ink/70">
                      Delivery Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="e.g. Taifa, Accra"
                      className="border border-luxe-ink/20 px-4 py-3 focus:outline-none focus:border-luxe-rose"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label htmlFor="notes" className="text-sm uppercase tracking-widest text-luxe-ink/70">
                      Personalization Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="Names, dates, colors or other customization details..."
                      className="border border-luxe-ink/20 px-4 py-3 focus:outline-none focus:border-luxe-rose resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full disabled:opacity-60"
                    >
                      {status === "loading" ? "Placing Order..." : "Place Order"}
                    </button>
                    {message && (
                      <p className="text-sm text-red-500 mt-3">{message}</p>
                    )}
                  </div>
                </form>
              </div>

              <div className="lg:col-span-2 bg-luxe-ink text-white p-8 h-fit">
                <h2 className="font-display text-2xl mb-6">Order Summary</h2>
                <ul className="flex flex-col gap-4 mb-6">
                  {items.map((item) => {
                    const product = PRODUCTS.find((p) => p.id === item.id);
                    if (!product) return null;
                    return (
                      <li key={item.id} className="flex justify-between text-sm">
                        <span>
                          {product.name} &times; {item.quantity}
                        </span>
                        <span>{formatPrice(product.price * item.quantity)}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-t border-white/20 pt-4 flex justify-between font-display text-xl">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
