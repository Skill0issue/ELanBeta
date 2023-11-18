/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '950px', // Changed the default value from 768px to 950px
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily:{
        'Lilita':"'Lilita One'",
        'Londrina':"'Londrina Solid'",
        'Notable':'"Notable"',
        'Mplus':"'M PLUS 1p', sans-serif",
        'Moul':"'Moul'",
        'MoulPali':"'Moulpali'",
      },
      backgroundImage:{
        'logo-image':"url('/assets/elan.png')"
      },
    },
  },
  plugins: [],
}

