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
          50: "#fbf8ec",
          100: "#f5edd0",
          200: "#e9d8a0",
          300: "#dcc36f",
          400: "#cfb03f",
          500: "#C9A227",
          600: "#a9861f",
          700: "#866a19",
          800: "#664f12",
          900: "#47360c",
          DEFAULT: "#C9A227",
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
