/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Caveat':['Caveat','Cursive']
    },
  },
},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          position: 'relative',
          color: '#faf2ff',
          '-webkit-text-stroke': '1px #530c90',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

