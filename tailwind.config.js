/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#1E1E2E',  // Dark background
        textcolor: '#E0E0E0', // Light gray for text
        secclr: '#1E1E2E',   // Secondary background, slightly lighter
        accentclr: '#FF5722', // Bright accent color (pinkish)
        'custom-zeal': '#00D1A0', // Bright teal for accent elements
        'custom-blue': '#3E92CC', // Blue for accent or interactive elements
        'dark-header': '#181828', // Darker header/nav background
        'muted-text': '#A0A0A0',  // Muted gray for secondary text
      },
      boxShadow: {
        'inner': 'inset 0 10px 30px -1px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
