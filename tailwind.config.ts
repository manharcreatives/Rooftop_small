import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./admin/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        gold: "#C9A227",
        accent: "#FF8C42",
        background: "#FFFFFF",
        "dark-bg": "#0D0D0D"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        "gold-soft": "0 10px 30px rgba(201, 162, 39, 0.2)"
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom, rgba(13, 13, 13, 0.55), rgba(13, 13, 13, 0.8))"
      }
    }
  },
  plugins: []
};

export default config;
