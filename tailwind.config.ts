import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
        "3xl": "1920px", // Custom breakpoint for very large screens
        "4xl": "2560px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Freeman: ["Freeman", "sans-serif"],
        Oxygen: ["Oxygen", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        VT: ["VT323", "monospace"],
      },
      colors: {
        blueLight: "#D7F3F5",
        lightOrange: "#FF6714",
        orangeGradient: "#de270b",
        greenDeep: "#17A540",
        blackGray: "#0E100F",
        foggy: "#566162",
        watermelon: "#05AF94",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
