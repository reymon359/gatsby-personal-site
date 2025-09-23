/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        small: '.8rem',
        normal: '1rem',
        medium: '1.25rem',
        mediumLarge: '1.5rem',
        large: '1.7rem',
        xLarge: '2rem',
        xxLarge: '2.25rem', // 36px
        xxxLarge: '3rem',   // 48px
        xxxxLarge: '4.5rem' // 72px
      },
    }
  },
  plugins: [],
}
