import { nextui } from "@nextui-org/react"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  // Ensure that the nextui() function is properly imported
  plugins: [nextui()]
};
