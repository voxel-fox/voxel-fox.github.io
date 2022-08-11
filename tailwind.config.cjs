/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  corePlugins: {
    preflight: false,
  },
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
