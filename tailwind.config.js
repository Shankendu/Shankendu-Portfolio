/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontFamily: {
      poppins:["Poppins", "serif"],
      source:['"Source Sans 3"', "sans-serif"],

    },
    extend: {
      scrollbar: {
       none: "none"
      },
      keyframes: {
        spin: {
          '10%': { transform: 'translateY(-112%)' },
          '25%': { transform: 'translateY(-100%)' },
          '35%': { transform: 'translateY(-212%)' },
          '50%': { transform: 'translateY(-200%)' },
          '60%': { transform: 'translateY(-312%)' },
          '75%': { transform: 'translateY(-300%)' },
          '85%': { transform: 'translateY(-412%)' },
          '100%': { transform: 'translateY(-400%)' },
        },
        scrollLeft:{
          to:{
            left:"-200%"
          }
        },
        load:{
          '0%':{
            transform:"rotate(0deg)"
        },
        '100%':{
            transform:"rotate(360deg)"
        }
        },
        ripple:{
          '0%':{
            transform:"scale(1)",
            opacity:"1"
          },
          '100%':{
            transform:"scale(1.7)",
            opacity:"0"
          }
        }
      },
      animation: {
        'spin-words': 'spin 1s linear 1',
        'scroll-left': 'scrollLeft 30s linear infinite calc(30s / 2 * (var(--position) - 1))',
        'spinner': 'load 3s linear infinite',
        'ripple': 'ripple 1s linear infinite'
      },
    },
  },
  plugins: [],
}