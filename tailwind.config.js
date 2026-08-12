/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Socket (UI Designer) will provide exact hex codes on Friday.
        // These are placeholders mapping to the "Ultra-Clean Elite SaaS" aesthetic.
        primary: {
          obsidian: "#000000",
          offWhite: "#FAFAFA",
        },
        brand: {
          accent: "#D4AF37", // Example gold accent
        }
      },
      fontFamily: {
        // We will map Inter or SF Pro here when fonts are loaded
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
