import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          rose: "#c9527a",
          rosedark: "#8f3a5c",
          mauve: "#a97b8f",
          blush: "#f7e9ee",
          sage: "#a9c2ab",
          lavender: "#b6a7d1",
          cream: "#faf6f1",
          ink: "#2c2430",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
