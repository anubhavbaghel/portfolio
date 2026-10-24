/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        paper: {
          50: "rgb(var(--color-paper-50) / <alpha-value>)",
          100: "rgb(var(--color-paper-100) / <alpha-value>)",
          200: "rgb(var(--color-paper-200) / <alpha-value>)",
          300: "rgb(var(--color-paper-300) / <alpha-value>)",
          400: "rgb(var(--color-paper-400) / <alpha-value>)",
        },
        ink: {
          900: "rgb(var(--color-ink-900) / <alpha-value>)",
          800: "rgb(var(--color-ink-800) / <alpha-value>)",
          700: "rgb(var(--color-ink-700) / <alpha-value>)",
          600: "rgb(var(--color-ink-600) / <alpha-value>)",
          500: "rgb(var(--color-ink-500) / <alpha-value>)",
          400: "rgb(var(--color-ink-400) / <alpha-value>)",
          300: "rgb(var(--color-ink-300) / <alpha-value>)",
          200: "rgb(var(--color-ink-200) / <alpha-value>)",
          100: "rgb(var(--color-ink-100) / <alpha-value>)",
        },
        terracotta: {
          DEFAULT: "rgb(var(--color-terracotta) / <alpha-value>)",
          dark: "rgb(var(--color-terracotta-dark) / <alpha-value>)",
          light: "rgb(var(--color-terracotta-light) / <alpha-value>)",
          subtle: "rgb(var(--color-terracotta-subtle) / <alpha-value>)",
          border: "rgb(var(--color-terracotta-border) / <alpha-value>)",
        },
        cobalt: {
          DEFAULT: "rgb(var(--color-cobalt) / <alpha-value>)",
          dark: "rgb(var(--color-cobalt-dark) / <alpha-value>)",
          light: "rgb(var(--color-cobalt-light) / <alpha-value>)",
          subtle: "rgb(var(--color-cobalt-subtle) / <alpha-value>)",
          border: "rgb(var(--color-cobalt-border) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)",
        lift: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
