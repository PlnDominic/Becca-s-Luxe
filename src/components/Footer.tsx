import Link from "next/link";

const ABOUT_LINKS = [
  { label: "About Us", href: "/#about" },
  { label: "Occasions", href: "/#occasions" },
  { label: "Shop", href: "/shop" },
];

const SUPPORT_LINKS = [
  { label: "Book an Order", href: "/#order" },
  { label: "Contact Us", href: "/#contact" },
  { label: "Checkout", href: "/checkout" },
];

const CONTACT = [
  { label: "Location", value: "Taifa – Accra" },
  { label: "Call / WhatsApp", value: "+233 59 150 5197" },
  { label: "Call", value: "+233 24 418 4510" },
  {
    label: "Email",
    value: "info.beccaluxe@gmail.com",
    href: "mailto:info.beccaluxe@gmail.com",
  },
];

function SocialIcon({ path }: { path: string }) {
  return (
    <span className="w-9 h-9 rounded-full border border-luxe-ink/20 flex items-center justify-center text-luxe-ink hover:bg-luxe-ink hover:text-white transition-colors cursor-pointer">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d={path} />
      </svg>
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-luxe-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-display text-2xl text-luxe-ink">
            Becca&apos;s <span className="font-script text-luxe-rose">Luxe</span>
          </span>
          <p className="mt-4 text-sm text-luxe-ink/70 leading-relaxed">
            Creating beautiful memories through custom souvenirs for every
            special occasion.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon path="M18.9 2H22l-7.6 8.7L23 22h-7l-5.5-6.7L4 22H1l8.1-9.3L1 2h7.2l5 6.1L18.9 2zm-1.2 18h1.7L6.4 4H4.6l13.1 16z" />
            <SocialIcon path="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v8h3v-8h2.5l.5-3H13v-1.2c0-.5.4-.8 1-.8z" />
            <SocialIcon path="M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.6 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.2.6-.6 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.6-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.2-.6.6-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.5 6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold text-luxe-ink mb-4">
            About
          </h4>
          <ul className="space-y-2 text-sm text-luxe-ink/70">
            {ABOUT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-luxe-rose">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold text-luxe-ink mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-luxe-ink/70">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-luxe-rose">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold text-luxe-ink mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-luxe-ink/70">
            {CONTACT.map((item) => (
              <li key={item.value}>
                <span className="text-luxe-mauve font-medium">{item.label}: </span>
                {item.href ? (
                  <a href={item.href} className="hover:text-luxe-rose">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-luxe-ink/10 py-6 text-center text-xs text-luxe-ink/60">
        &copy; {new Date().getFullYear()} Becca&apos;s Luxe. All rights reserved.
      </div>
    </footer>
  );
}
