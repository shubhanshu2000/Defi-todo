import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // ".scrollbar-hide": {
        //   /* IE and Edge */
        //   "-ms-overflow-style": "none",

        //   /* Firefox */
        //   "scrollbar-width": "none",

        //   /* Safari and Chrome */
        //   "&::-webkit-scrollbar": {
        //     display: "none",
        //   },
        // },
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
  ],
};
