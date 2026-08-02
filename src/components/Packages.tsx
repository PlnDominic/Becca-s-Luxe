import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { formatPrice } from "@/lib/currency";
import { CheckIcon } from "./icons";

export default function Packages() {
  return (
    <section className="py-24 bg-white border-t border-luxe-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="section-eyebrow mb-3">Bundled &amp; Ready</p>
        <h2 className="font-display text-3xl sm:text-4xl text-luxe-ink">
          Souvenir Packages For Every Ceremony
        </h2>
        <p className="mt-4 text-luxe-ink/70 max-w-2xl mx-auto">
          Skip picking one by one. Choose a curated bundle for your occasion
          and we&apos;ll personalize every piece to match.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white border border-luxe-ink/10 rounded-2xl p-6 sm:p-8 flex flex-col"
            >
              {pkg.popular && (
                <span className="absolute -top-3 right-6 bg-luxe-rose text-white text-[10px] uppercase tracking-widest font-semibold rounded-full px-3 py-1">
                  Popular
                </span>
              )}

              <span className="section-eyebrow !text-luxe-mauve mb-2">{pkg.occasion}</span>
              <h3 className="font-display text-xl sm:text-2xl text-luxe-ink">{pkg.name}</h3>
              <p className="mt-2 text-sm text-luxe-ink/70">{pkg.description}</p>

              <ul className="mt-5 flex flex-col gap-2 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-luxe-ink/80">
                    <CheckIcon className="w-4 h-4 text-luxe-rose shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <span className="flex flex-col">
                  <span className="font-display text-xl text-luxe-ink">
                    {formatPrice(pkg.price)}
                  </span>
                  {pkg.priceIsEstimate && (
                    <span className="text-[11px] text-luxe-ink/50">Estimated, confirm on order</span>
                  )}
                </span>
                <Link
                  href={`/?occasion=${encodeURIComponent(pkg.occasion)}&package=${encodeURIComponent(pkg.name)}#order`}
                  className="btn-primary !py-2.5 !px-5 !text-xs"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
