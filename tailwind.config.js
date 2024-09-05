/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#FFF5EE',
        textcolor: '#000000',
        secclr: '#F5F5F5',
        accentclr: '#FF5722',
        'custom-zeal': '#008b8b',
        'custom-blue': '#ADD8E6',
      },
      boxShadow: {
      'inner': 'inset 0 35px 60px -1px rgba(0, 139, 134, 1)'
      },
    },
  },
  plugins: [],
}