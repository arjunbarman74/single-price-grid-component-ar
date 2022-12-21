const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(179, 62%, 43%)",
        "Bright-Yellow": "hsl(71, 73%, 54%)",
        "Light-Gray": " hsl(204, 43%, 93%)",
        "Grayish-Blue": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
