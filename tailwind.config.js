/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    fontFamily: {
      body: ["Overpass"],
    },

    extend: {
      colors: {
        from: {
          50: "hsl(212, 18%, 14%)",
        },
        to: {
          50: "hsl(220, 16%, 11%)",
        },
        background: {
          50: "#141519",
        },
        primary: {
          950: "hsl(216, 12%, 8%)",
        },
        card: {
          50: "hsl(213, 19%, 18%)",
        },
        lightgray: {
          50: "hsl(217, 12%, 63%)",
        },
        mdgray: {
          50: "hsl(216, 12%, 54%)",
        },
        orange: {
          50: "hsl(25, 97%, 53%)",
        },
      },
    },
  },
  plugins: [],
};
