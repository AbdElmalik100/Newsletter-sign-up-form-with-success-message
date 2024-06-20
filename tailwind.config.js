/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto']
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        // ### Primary

        'Tomato': 'hsl(4, 100%, 67%)',
        'Light-tomato': '#FF5376',

        // ### Neutral

        'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
        'Charcoal-Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}