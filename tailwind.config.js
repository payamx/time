/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily: {
      vazir: ['Vazir'],
      glyphicons:['glyphicons'],

    },

    extend: {
      colors:{browntime:'#DA9034',darkbrown:'#c17719',mainbody:'#e6e6e6',grey:'#f5f5f5' ,newgrey:'#eeeeee'
        ,darkgrey:'#cccccc' ,greytext:'#666666' ,darkback:"#26292b", darktop:"#181a1b" ,darkapp:"#35393b"}

    },
  },
  plugins: [],
}

