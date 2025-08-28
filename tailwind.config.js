module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ["var(--font-playfair)", "serif"],
          poppins: ["var(--font-poppins)", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
  