import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#0C0A09",
        foreground: "#FAFAF9",
        card: "#1C1917",
        "card-foreground": "#FAFAF9",
        popover: "#0C0A09",
        "popover-foreground": "#FAFAF9",
        primary: {
          DEFAULT: "#E8A838",
          foreground: "#0C0A09",
          glow: "#FBBF24",
        },
        secondary: {
          DEFAULT: "#292524",
          foreground: "#FAFAF9",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FAFAF9",
        },
        muted: {
          DEFAULT: "#1C1917",
          foreground: "#A8A29E",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#0C0A09",
        },
        info: {
          DEFAULT: "#3B82F6",
          foreground: "#FAFAF9",
        },
        emerald: {
          DEFAULT: "#10B981",
          foreground: "#FAFAF9",
        },
        sidebar: {
          DEFAULT: "#0C0A09",
          foreground: "#FAFAF9",
          primary: "#E8A838",
          "primary-foreground": "#0C0A09",
          accent: "#F59E0B",
          "accent-foreground": "#0C0A09",
          border: "#292524",
          ring: "#E8A838",
        },
        "primary-bg": "#0C0A09",
        "card-bg": "#1C1917",
        "section-bg-1": "#0C0A09",
        "section-bg-2": "#1C1917",
        "accent-gold": "#E8A838",
        "accent-amber": "#FBBF24",
        "text-primary": "#FAFAF9",
        "text-muted": "#A8A29E",
        danger: "#DC2626",
        success: "#10B981",
        border: "#292524",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
