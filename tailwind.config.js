/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"], // semua file yang pake Tailwind
  theme: {
    extend: {},
  },
  plugins: [
        require('@tailwindcss/aspect-ratio'), // penting biar aspect-* jalan
  ],
}

