/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Roboto ko 'sans' default font bana diya
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}