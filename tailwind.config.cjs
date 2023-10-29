/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {
      /** Custom css class extensions go here. */
      colors: {
        'd74a49': '#d74a49',
        '183e4b': '#183e4b',
        '1b4552': '#1b4552',
        '8ba0a4': '#8ba0a4',
        'eaeaea': '#eaeaea',
      },
    },
  },
  plugins: [],
}
