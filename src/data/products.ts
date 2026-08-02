export interface Product {
  id: string;
  name: string;
  category: string;
  tag: string;
  price: number;
  description: string;
  color: string;
}

export const CATEGORIES = [
  "All",
  "Bags & Drinkware",
  "Home & Decor",
  "Stationery",
  "Keepsakes",
  "Remembrance",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "tote-bag",
    name: "Personalized Tote Bag",
    category: "Bags & Drinkware",
    tag: "Bride & Guests",
    price: 85,
    description: "Canvas tote personalized with your special message.",
    color: "bg-luxe-blush",
  },
  {
    id: "tumbler",
    name: "Insulated Tumbler",
    category: "Bags & Drinkware",
    tag: "Best Day Ever",
    price: 95,
    description: "Insulated tumbler for daily reminders of your big day.",
    color: "bg-luxe-lavender/20",
  },
  {
    id: "ceramic-mug",
    name: "Ceramic Mug",
    category: "Bags & Drinkware",
    tag: "Bride",
    price: 65,
    description: "Classic ceramic mug with custom name or quote.",
    color: "bg-luxe-sage/20",
  },
  {
    id: "water-bottle",
    name: "Stainless Water Bottle",
    category: "Bags & Drinkware",
    tag: "Stay Inspired",
    price: 90,
    description: "Stainless steel bottle to stay hydrated in style.",
    color: "bg-luxe-mauve/10",
  },
  {
    id: "gift-box",
    name: "Ribboned Gift Box",
    category: "Keepsakes",
    tag: "With Love",
    price: 70,
    description: "Ribboned keepsake box for elegant thank-you gifts.",
    color: "bg-luxe-blush",
  },
  {
    id: "journal",
    name: "Custom Journal & Pen",
    category: "Stationery",
    tag: "Dream Plan Do",
    price: 110,
    description: "Notebook and pen set to dream, plan and do.",
    color: "bg-luxe-sage/20",
  },
  {
    id: "throw-pillow",
    name: "Throw Pillow",
    category: "Home & Decor",
    tag: "Love Makes A Family",
    price: 130,
    description: "Soft accent pillow with a meaningful quote.",
    color: "bg-luxe-lavender/20",
  },
  {
    id: "candle",
    name: "Scented Candle",
    category: "Home & Decor",
    tag: "Forever In Our Hearts",
    price: 75,
    description: "Hand-poured candle for remembrance and joy.",
    color: "bg-luxe-mauve/10",
  },
  {
    id: "keepsake-box",
    name: "Memory Keepsake Box",
    category: "Remembrance",
    tag: "In Loving Memory",
    price: 120,
    description: "Elegant box to honor and remember loved ones.",
    color: "bg-luxe-blush",
  },
  {
    id: "towel",
    name: "Personalized Towel",
    category: "Home & Decor",
    tag: "Thank You",
    price: 80,
    description: "Plush towel personalized for celebrations.",
    color: "bg-luxe-sage/20",
  },
  {
    id: "keychain",
    name: "Acrylic Keychain",
    category: "Keepsakes",
    tag: "A Moment to Remember",
    price: 35,
    description: "Small acrylic token to remember every moment.",
    color: "bg-luxe-lavender/20",
  },
  {
    id: "photo-frame",
    name: "Photo Frame",
    category: "Keepsakes",
    tag: "Memories That Last",
    price: 100,
    description: "Frame to display memories that last forever.",
    color: "bg-luxe-mauve/10",
  },
  {
    id: "tissue-box",
    name: "Decorative Tissue Box",
    category: "Remembrance",
    tag: "Tissues of Love",
    price: 60,
    description: "Beautifully designed tissue box for happy tears.",
    color: "bg-luxe-blush",
  },
];
