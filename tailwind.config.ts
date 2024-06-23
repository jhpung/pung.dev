import type { Config } from "tailwindcss";
import typo from "@tailwindcss/typography";

import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[600],
        secondary: colors.yellow[500],
        black: colors.gray[900],
        white: colors.gray[100],
      },
      keyframes: {
        up: {
          "0%": { transform: "scale(1.2)", opacity: "0%" },
          "100%": { transform: "scale(1.0)", opacity: "100%" },
        },
      },
      animation: {
        up: "up 0.2s ease-in-out 1 forwards",
      },
    },
  },
  plugins: [typo],
};
export default config;
