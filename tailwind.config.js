/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "var(--violet)",
        },
        cyan: {
          DEFAULT: "var(--cyan)",
        },
        bg: "var(--bg)",
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
