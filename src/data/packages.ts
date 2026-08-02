export interface SouvenirPackage {
  id: string;
  name: string;
  occasion: string;
  price: number;
  description: string;
  items: string[];
  popular?: boolean;
}

export const PACKAGES: SouvenirPackage[] = [
  {
    id: "wedding",
    name: "Wedding Celebration Package",
    occasion: "Wedding",
    price: 320,
    description: "An elegant bundle for the bride, groom and bridal party.",
    items: ["Personalized Tote Bag", "Insulated Tumbler", "Ceramic Mug", "Photo Frame"],
    popular: true,
  },
  {
    id: "christening",
    name: "Baby Christening Package",
    occasion: "Baby Christening",
    price: 250,
    description: "Sweet keepsakes to mark baby's naming day.",
    items: ["Ribboned Gift Box", "Custom Journal & Pen", "Acrylic Keychain", "Personalized Towel"],
  },
  {
    id: "birthday",
    name: "Birthday Celebration Package",
    occasion: "Birthday Party",
    price: 280,
    description: "Fun, colorful favors for an unforgettable birthday.",
    items: ["Insulated Tumbler", "Ceramic Mug", "Throw Pillow", "Acrylic Keychain"],
  },
  {
    id: "remembrance",
    name: "In Loving Memory Package",
    occasion: "Funeral",
    price: 220,
    description: "Comforting keepsakes to honor and remember a loved one.",
    items: ["Memory Keepsake Box", "Decorative Tissue Box", "Scented Candle", "Photo Frame"],
  },
  {
    id: "anniversary",
    name: "Anniversary Package",
    occasion: "Anniversary",
    price: 300,
    description: "Romantic touches to celebrate another year together.",
    items: ["Personalized Towel", "Scented Candle", "Throw Pillow", "Photo Frame"],
  },
  {
    id: "corporate",
    name: "Corporate Gifting Package",
    occasion: "Corporate Event",
    price: 350,
    description: "Polished branded gifts for clients, staff and partners.",
    items: ["Personalized Tote Bag", "Stainless Water Bottle", "Custom Journal & Pen", "Ceramic Mug"],
    popular: true,
  },
];
