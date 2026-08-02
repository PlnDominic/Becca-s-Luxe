const CONTACT = [
  { label: "Location", value: "Taifa – Accra" },
  { label: "Call / WhatsApp", value: "+233 59 150 5197" },
  { label: "Call", value: "+233 24 418 4510" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-luxe-cream border-t border-luxe-rose/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid sm:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl text-luxe-rose">
            Becca&apos;s <span className="font-script text-luxe-mauve">Luxe</span>
          </h3>
          <p className="mt-4 text-sm text-luxe-ink/70 leading-relaxed">
            Creating beautiful memories through custom souvenirs for every
            special occasion.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold text-luxe-ink mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-luxe-ink/70">
            {CONTACT.map((item) => (
              <li key={item.value}>
                <span className="text-luxe-mauve font-medium">{item.label}: </span>
                {item.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold text-luxe-ink mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-luxe-ink/70">
            <li><a href="#about" className="hover:text-luxe-rose">About Us</a></li>
            <li><a href="#occasions" className="hover:text-luxe-rose">Occasions</a></li>
            <li><a href="#products" className="hover:text-luxe-rose">Products</a></li>
            <li><a href="#order" className="hover:text-luxe-rose">Book an Order</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-luxe-rose/20 py-6 text-center text-xs text-luxe-ink/60">
        &copy; {new Date().getFullYear()} Becca&apos;s Luxe. All rights reserved.
      </div>
    </footer>
  );
}
