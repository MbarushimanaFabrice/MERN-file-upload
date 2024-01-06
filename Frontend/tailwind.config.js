/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-fast-slow': 'spin 3s linear infinite',
        'ping-slow':'ping 3s infinite'
      }
    },
  },
  plugins: [],
}