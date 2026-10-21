/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#fdfcf9",
          100: "#faf9f5",
          200: "#f4f2ea",
          300: "#e9e6dc",
          400: "#dbd7ca",
        },
        ink: {
          900: "#181715",
          800: "#272522",
          700: "#3d3a35",
          600: "#5a564f",
          500: "#767269",
          400: "#98948a",
          300: "#beb9ad",
          200: "#e0dcd1",
          100: "#eae6dc",
        },
        terracotta: {
          DEFAULT: "#c2410c",
          dark: "#9a3412",
          light: "#ea580c",
          subtle: "#fff7ed",
          border: "#fed7aa",
        },
      },
      fontFamily: {
        sans: ["'Host Grotesk'", "'Geist'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        serif: ["'Newsreader'", "Georgia", "serif"],
      },
      borderWidth: {
        hairline: "0.5px",
      },
    },
  },
  plugins: [],
}
