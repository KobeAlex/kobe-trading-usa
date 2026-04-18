import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1E3D",
          deep: "#0A1428",
        },
        blue: {
          DEFAULT: "#1B4FA0",
          accent: "#2D6FD4",
          light: "#EBF2FC",
        },
        gray: {
          50: "#F7F8FA",
          100: "#EEF0F4",
          200: "#D9DEE6",
          400: "#8A92A3",
          600: "#4A5265",
          800: "#1F2533",
        },
        accent: "#C9A961",
        success: "#16A34A",
      },
      fontFamily: {
        barlow: ["'Barlow'", "sans-serif"],
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
