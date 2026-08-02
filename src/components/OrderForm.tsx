"use client";

import { FormEvent, useState } from "react";

const OCCASIONS = [
  "Wedding",
  "Baby Christening",
  "Birthday Party",
  "Funeral",
  "Anniversary",
  "Corporate Event",
  "Naming Ceremony",
  "Social Celebration",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function OrderForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thank you! Your order request has been received. We'll reach out shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="order" className="py-24 bg-luxe-ink text-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="section-eyebrow !text-luxe-lavender mb-3">Let&apos;s Get Started</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
            Book Your Custom Souvenir Order
          </h2>
          <p className="mt-4 text-white/70">
            Personalized designs for every celebration. Tell us about your event.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm uppercase tracking-widest text-white/70">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-luxe-rose text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm uppercase tracking-widest text-white/70">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-luxe-rose text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm uppercase tracking-widest text-white/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-luxe-rose text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="occasion" className="text-sm uppercase tracking-widest text-white/70">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-luxe-rose text-white [&>option]:text-luxe-ink"
              defaultValue=""
            >
              <option value="" disabled>
                Select an occasion
              </option>
              {OCCASIONS.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm uppercase tracking-widest text-white/70">
              Tell Us About Your Order
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-transparent border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-luxe-rose text-white resize-none"
              placeholder="Product type, quantity, colors, date needed..."
            />
          </div>

          <div className="sm:col-span-2 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full sm:w-auto disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Submit Order Request"}
            </button>
            {message && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-luxe-sage" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
