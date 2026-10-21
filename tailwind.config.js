/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#fcfbf9",
        paper: {
          50: "#ffffff",
          100: "#fcfbf9",
          200: "#f6f4ee",
          300: "#ebe7dd",
          400: "#d9d4c7",
        },
        ink: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
        },
        terracotta: {
          DEFAULT: "#c2410c",
          dark: "#9a3412",
          light: "#ea580c",
          subtle: "#fff7ed",
          border: "#fed7aa",
        },
        cobalt: {
          DEFAULT: "#1d4ed8",
          dark: "#1e40af",
          light: "#3b82f6",
          subtle: "#eff6ff",
          border: "#bfdbfe",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.03)",
        card: "0 2px 8px -2px rgba(15, 23, 42, 0.04), 0 1px 4px -1px rgba(15, 23, 42, 0.02)",
        lift: "0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.03)",
      },
    },
  },
  plugins: [],
}
