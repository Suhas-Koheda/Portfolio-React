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
          shadowclr: '#add836', // Define the custom color
        },
        boxShadow: {
          'custom-shadow': '0 4px 6px -1px rgba(173, 216, 54, 0.5), 0 2px 4px -1px rgba(173, 216, 54, 0.25)', // Use the custom color
        },
      },
    },
    plugins: [],
  }