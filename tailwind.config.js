/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 11px rgba(33,33,33,0.2)',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark",]
  },
}

