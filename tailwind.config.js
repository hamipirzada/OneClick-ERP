/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A237E', // Deep Blue/Navy primary
        'primary-dark': '#0D1B69',
        navy: '#1A237E',
        'custom-bg': '#303B7A', // Custom background color
        accent: '#FF5722', // Bright Orange accent
        'accent-green': '#4CAF50', // Bright Green accent
        'gray-light': '#F8F9FA',
        'text-dark': '#212121',
        'text-light': '#757575',
        white: '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Open Sans', 'Roboto', 'system-ui', 'sans-serif'], // Body text
        'display': ['Montserrat', 'Poppins', 'system-ui', 'sans-serif'], // Headings
      },
    },
  },
  plugins: [],
}