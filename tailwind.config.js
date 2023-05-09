/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily:{
      'primary': ['Playfair Display', 'serif'],
    },
    extend: {
      backgroundImage:{
        'hero':"url(./images/bgimage.jpg)"
      },
      colors:{
        'primary':'#FF7757',
        'secondary':'#172432',
        'gray':'#767E86',
      }
    },
    screens:{
      'xl':{'max':'1440px'},
      'lg':{'max':'1152px'},
      'md':{'max':'768px'},
      'sm':{'max':'560px'},
    }
  },
  plugins: [],
}

