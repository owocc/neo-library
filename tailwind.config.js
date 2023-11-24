/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4960D4",
        },
        base: {
          DEFAULT: "#606785",
          title: {
            DEFAULT: "#0C1645",
          },
          border: {
            DEFAULT: "#D9DDF2",
          },
          body: {
            DEFAULT: "#EBEEFF",
          },
          container: {
            DEFAULT: "#F0F2FF",
          },
        },
      },
      transitionDuration: {
        400: "400ms",
      },
      height: {
        nav: "var(--header-height)",
      },
      scale: {
        80: ".8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
