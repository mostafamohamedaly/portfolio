module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F4D5D',
        secondary: '#8E5C7B',
        text: '#2F2F2F',
        accent: '#F8A02E',
      },
      fontFamily: {
       // sans: ['Inter', 'Arial', 'sans-serif'],  // Add Inter font here
        // Or if you prefer Poppins:
        sans: ['Poppins', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}
