/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      "lg":{ 'max':'992px'},
      "md":{ 'max':'768px'},
      "sm":{ 'max':'480px'},
      
    },
    container: {
      padding: '20px',
      center : true,
      width:'1080px',
    },
    extend: {
      
    },
  },
  plugins: [],
}
