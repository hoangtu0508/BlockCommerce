/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#f4f4f4',
        'oranger': '#ffaf74',
        'xam': '#4d6472',
        'itxam': '#7692a9',
        'banner': '#f2f2f2',
        'text': '#666666'
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
  },
  plugins: [],
}