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
        background: "#09090B",
        foreground: "#FAFAFA",
        card: "#18181B",
        "card-foreground": "#FAFAFA",
        popover: "#09090B",
        "popover-foreground": "#FAFAFA",
        primary: {
          DEFAULT: "#D4A843",
          foreground: "#09090B",
          glow: "#F5C542",
        },
        secondary: {
          DEFAULT: "#27272A",
          foreground: "#FAFAFA",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FAFAFA",
        },
        muted: {
          DEFAULT: "#1E1E22",
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#F5C542",
          foreground: "#09090B",
        },
        info: {
          DEFAULT: "#3B82F6",
          foreground: "#FAFAFA",
        },
        sidebar: {
          DEFAULT: "#09090B",
          foreground: "#FAFAFA",
          primary: "#D4A843",
          "primary-foreground": "#09090B",
          accent: "#F5C542",
          "accent-foreground": "#09090B",
          border: "#27272A",
          ring: "#D4A843",
        },
        "primary-bg": "#09090B",
        "card-bg": "#18181B",
        "section-bg-1": "#09090B",
        "section-bg-2": "#18181B",
        "accent-gold": "#D4A843",
        "accent-amber": "#F5C542",
        "text-primary": "#FAFAFA",
        "text-muted": "#A1A1AA",
        danger: "#EF4444",
        success: "#22C55E",
        border: "#27272A",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
