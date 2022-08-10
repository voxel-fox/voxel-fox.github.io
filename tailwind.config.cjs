/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground-color)",
        background: "var(--background-color)",
      },
    },
  },
  plugins: [],
};
