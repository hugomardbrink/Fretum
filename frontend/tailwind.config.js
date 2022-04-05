module.exports = {
  content: [
      "./public/index.html",
      "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster','serif'],
      },
      colors: {
        'oceanBlue':  '#3f9bb6',
        'background': '#394551',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
