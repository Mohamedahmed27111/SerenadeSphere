/** @type {import('tailwindcss').Config} */
export default {
 
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'find your artist best music' },
        { name: 'keywords', content: 'The Weeknd, kanye west, Future , sza , Lana Del Rey ' },
        { name: 'author', content: 'MR willson' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        // You can include global scripts here
      ]
    }
  },
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

