/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        light: "rgb(241, 246, 249)",
        dark: "rgb(33, 42, 62)",
        navy: "rgb(57, 72, 103)",
        grey: "rgb(155, 164, 181)"
      }
    },
  },
  plugins: [],
};
