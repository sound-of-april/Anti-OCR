module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bitmap': ['DinkieBitmap']
      }
    },
  },
  plugins: [require("daisyui")],
}
