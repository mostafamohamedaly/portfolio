module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F4D5D",
        secondary: "#8E5C7B",
        text: "#2F2F2F",
        accent: "#F8A02E",
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"], // Only for splash screen
        sans: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".fade-circle": {
          "mask-image":
            "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 50%)",
          "-webkit-mask-image":
            "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 50%)",
        },
      });
    },
  ],
};
