module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "Sans-serif"],
      },
      colors: {
        gray: {
          300: "#b5b9be",
          400: "#707983",
          800: "#1d2b3b",
          900: "#112031",
        },
        teal: {
          200: "#d4ecdd",
          300: "#dbe1b9",
        },
      },
    },
  },
  plugins: [],
};
