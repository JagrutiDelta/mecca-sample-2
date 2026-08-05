import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#8B1E2D",
          light: "#A8394A",
          dark: "#6B1622",
        },
        navy: {
          DEFAULT: "#0F2740",
          light: "#1B3A5C",
        },
        medblue: "#355A8A",
        bg: "#F8FAFC",
        border: "#E6EAF0",
        ink: "#243B53",
        gray: {
          DEFAULT: "#6B7280",
        },
        accent: "#C8D8F5",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["80px", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "hero-tablet": ["60px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-mobile": ["40px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(15, 39, 64, 0.15)",
        card: "0 10px 30px -10px rgba(15, 39, 64, 0.12)",
        glass: "0 8px 32px 0 rgba(15, 39, 64, 0.10)",
      },
      backgroundImage: {
        "burgundy-gradient": "linear-gradient(135deg, #8B1E2D 0%, #6B1622 100%)",
        "navy-gradient": "linear-gradient(180deg, #0F2740 0%, #0A1B2E 100%)",
        "medical-grid":
          "linear-gradient(rgba(53,90,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(53,90,138,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
