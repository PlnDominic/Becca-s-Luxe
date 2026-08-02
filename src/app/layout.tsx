import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Becca's Luxe | Premium Custom Souvenirs",
  description:
    "Becca's Luxe designs premium custom souvenirs for weddings, baby christenings, birthday parties, funerals, anniversaries, corporate events, naming ceremonies and social celebrations. Based in Taifa, Accra.",
  keywords: [
    "custom souvenirs Ghana",
    "wedding souvenirs Accra",
    "personalized gifts Ghana",
    "Becca's Luxe",
  ],
  openGraph: {
    title: "Becca's Luxe | Premium Custom Souvenirs",
    description:
      "Creating beautiful memories through custom souvenirs for every special occasion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
