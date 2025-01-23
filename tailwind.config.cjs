/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Source Sans 3"', "sans-serif"],
      "source-sans": ['"Source Sans 3"', "sans-serif"],
      "montserrat": ['Montserrat', 'sans-serif'],
      "just-another": ['"Just Another Hand"', 'cursive'],
    },
    extend: {
      colors: {
        "ds-white": "#FFFFFF",
        "ds-black": "#000000",
        "ds-grey": "#1D1D1B",
        "ds-red": {
          400: "#EA615F",
          500: "#F26662",
          600: "#F26662",
        },
        "ds-blue": {
          500: "#5571B5",
          600: "#5074B9",
          900: "#0B3048",
          "900-20": "#0B304833",
          "900-40": "#0B304866",
          "900-50": "#0B304880",
          "900-60": "#0B304899",
        },
        "ds-teal": {
          500: "#00B0AE",
        },
        "ds-blue-red-radial":
          "radial-gradient(49.97% 50.02% at 49.99% 50%, #557185 0%, #557185 7.44%, #567185 24.59%, #E47182 33.01%, #7371A8 44.84%, #91719E 58.69%, #B2DF88 74.08%, #D67770 90.54%, #EA615F 100%)",
      },
      backgroundColor: {
        "ds-white": "#FFFFFF",
        "ds-black": "#000000",
        "ds-grey": "#1D1D1B",
        "ds-red": {
          400: "#EA615F",
          500: "#F26662",
          600: "#F26662",
        },
        "ds-blue": {
          500: "#5571B5",
          600: "#5074B9",
          900: "#0B3048",
          "900-20": "#0B30483",
          "900-40": "#0B30486",
          "900-50": "#0B30488",
          "900-60": "#0B30489",
        },
        "ds-teal": {
          500: "#00B0AE",
        },
        "ds-blue-red-radial":
          "radial-gradient(49.97% 50.02% at 49.99% 50%, #557185 0%, #557185 7.44%, #567185 24.59%, #E47182 33.01%, #7371A8 44.84%, #91719E 58.69%, #B2DF88 74.08%, #D67770 90.54%, #EA615F 100%)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border|font|text)-.*/,
    },
  ],
};
