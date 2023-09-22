/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cc0101",
      },
      dropShadow: {
        '3xl': '0 0 25px rgba(0, 0, 0, 0.06)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    flex:{
      'mine': '0 0 auto;'
    }
      // backgroundImage: {
      //   Hero: "url('assets/Hero.png')",
      // },
    },
  },
  plugins: [],
}

