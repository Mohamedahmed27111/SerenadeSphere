/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./node_modules/flowbite/**/*.js"
],
  
theme: {
  extend: {
    colors:{
      P:{
        1:'#66FCF1',
        2:'#45A29E'
      },
      B:{
       1:'#0B0C10',
       2:'#1F2833'
      },
      G:'#C5C6C7'
    }
  },
},
  plugins: [
    require('flowbite/plugin')
]

}

