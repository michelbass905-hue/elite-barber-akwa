import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mat-black": "#0A0A0A",
        "dark-surface": "#121212",
        "dark-card": "#171717",
        "dark-border": "#262626",
        "aged-gold": "#C9A227",
        "aged-gold-dark": "#9E7E1D",
        "aged-gold-light": "#DFC04A",
        "off-white": "#EBE8E1",
        "muted-gray": "#8A8A8A",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Anton", "Impact", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widestx: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
