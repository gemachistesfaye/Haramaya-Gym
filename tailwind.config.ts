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
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        card: "#111111",
        "card-foreground": "#FFFFFF",
        popover: "#0A0A0A",
        "popover-foreground": "#FFFFFF",
        primary: {
          DEFAULT: "#C9A84C",
          foreground: "#0A0A0A",
          glow: "#E8B86D",
        },
        secondary: {
          DEFAULT: "#141414",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#E53935",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#222222",
          foreground: "#888888",
        },
        accent: {
          DEFAULT: "#E8B86D",
          foreground: "#0A0A0A",
        },
        sidebar: {
          DEFAULT: "#0A0A0A",
          foreground: "#FFFFFF",
          primary: "#C9A84C",
          "primary-foreground": "#0A0A0A",
          accent: "#E8B86D",
          "accent-foreground": "#0A0A0A",
          border: "#333333",
          ring: "#C9A84C",
        },
        "primary-bg": "#0A0A0A",
        "card-bg": "#111111",
        "section-bg-1": "#0A0A0A",
        "section-bg-2": "#141414",
        "accent-gold": "#C9A84C",
        "accent-amber": "#E8B86D",
        "text-primary": "#FFFFFF",
        "text-muted": "#888888",
        danger: "#E53935",
        success: "#4CAF50",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
