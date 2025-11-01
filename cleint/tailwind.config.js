/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 all your component paths
  ],
  theme: {
    extend: {
      colors: {
        "theme-yellow": "#FFD700", // 👈 custom color example (you used this)
      },
    },
  },
  plugins: [],
};
