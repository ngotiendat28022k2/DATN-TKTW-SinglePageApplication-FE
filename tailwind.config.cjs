/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        "PK-client": "#559d4e",
        "PK-admin": "#5a8d26",
        "Text-color": "#333333",
        "BG-Color": "#F0F0F0",
      },
    },
  },
  plugins: [],
};
