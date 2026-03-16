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
        gold: {
          50: "#faf6e6",
          100: "#f4e9c2",
          200: "#ead58b",
          300: "#dfc155",
          400: "#d4af37",
          500: "#c79f20",
          600: "#af8a1b",
          700: "#8f6f16",
          800: "#6f5511",
          900: "#4f3c0c",
          DEFAULT: "#D4AF37",
        },
        dark: {
          light: "#334155",
          DEFAULT: "#1E293B",
          darker: "#0f172a",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
