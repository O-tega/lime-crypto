/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        normal: '14px',
        big: '32px',
        average: '24px',
      },
      colors: {
        dashboard: '#DEDEDE',
        primary: '#959595',
        hgreen: '#093824',
        pastel: '#EBE675',
      },
    },
  },
  plugins: [],
};
