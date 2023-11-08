/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./dist/*.html",
    "./src/**/**/*.{html,js,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
        colors: {
            "primary": "var(--primary)",
            "secondary": "var(--secondary)",
            "warnings": "var(--warnings)",
            "text": "var(--text)"
          },
    },
  },
  darkMode: "class",
  plugins: [],
}

