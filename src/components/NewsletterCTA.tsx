"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Something went wrong.");

      setStatus("success");
      setMessage("Thanks! We'll keep you posted on new drops.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="bg-luxe-ink text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Ready to Get Our New Stuff?
          </h2>
          <p className="mt-3 text-white/70 max-w-md">
            Becca&apos;s Luxe for every occasion. Tell us what you need and
            we&apos;ll help you create a keepsake that&apos;s just right.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-96">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 bg-transparent border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-luxe-rose text-white"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-luxe-rose text-white px-6 py-3 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-luxe-ink transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send"}
            </button>
          </div>
          {message && (
            <p className={`mt-3 text-sm ${status === "success" ? "text-luxe-sage" : "text-red-300"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
