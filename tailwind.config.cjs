/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FFFFFF",
        "gray-50": "#F6F6F6",
        "gray-100": "#B3B3B3",
        "gray-500": "#6F6F6F",
        "primary-100": "#364659",
        "primary-300": "#223240",
        "primary-500": "#010A0D",
        "secondary-400": "#98A1A6",
        "secondary-500": "#FFF13D",
      },
      backgroundImage: (theme) => ({
        "gradient-darkblue": "linear-gradient(90deg, #223240 0%, #223240 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
    content: {
      evolvetext: "url('./assets/Logo/ACCESSTRA3.svg')",
      abstractwaves: "url('.assets/AbstractWaves.png')",
      sparkles: "url('.assets/Sparkles.png')",
      circles: "url('.assets/Circles.png')",
    }
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px"
  }
},
  plugins: [],
}

