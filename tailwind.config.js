/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#cc0101",
      },
      backgroundImage: {
        "hero-wave": "url('/images/online-banking-1c.png')",
        gradientTheme:
          "radial-gradient(circle at left, rgba(19, 98, 126, 0.4) 0%, rgba(255, 255, 255, 0) 25%) !important;",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      dropShadow: {
        "3xl": "0 0 25px rgba(0, 0, 0, 0.06)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      flex: {
        mine: "0 0 auto;",
      },
      // backgroundImage: {
      //   Hero: "url('assets/Hero.png')",
      // },
    },
  },
  plugins: [],
};
