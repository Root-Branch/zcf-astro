/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Source Sans 3"', "sans-serif"],
      "source-sans": ['"Source Sans 3"', "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      "just-another": ['"Just Another Hand"', "cursive"],
    },
    extend: {
      screens: {
        xs: "440px",
      },
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
          600: "#089E9C",
        },
        "ds-blue-red-radial":
          "radial-gradient(49.97% 50.02% at 49.99% 50%, #557185 0%, #557185 7.44%, #567185 24.59%, #E47182 33.01%, #7371A8 44.84%, #91719E 58.69%, #B2DF88 74.08%, #D67770 90.54%, #EA615F 100%)",
      },
      backgroundColor: {
        "ds-white": "#FFFFFF",
        "ds-black": "#000000",
        "ds-grey": "#f5f5f5",
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
      padding: {
        none: "0rem",
        "3xs": "1rem",
        xxs: "2rem",
        xs: "4rem",
        sm: "6rem",
        md: "7rem",
        lg: "10rem",
        xl: "12rem",
        "2xl": "16rem",
      },
      margin: {
        none: "0rem",
        "3xs": "1rem",
        xxs: "2rem",
        xs: "4rem",
        sm: "6rem",
        md: "7rem",
        lg: "10rem",
        xl: "12rem",
        "2xl": "16rem",
      },
      gap: {
        none: "0rem",
        xs: "4rem",
        sm: "6rem",
        md: "7rem",
        lg: "10rem",
        xl: "12rem",
        "2xl": "16rem",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border|font|pt|pb|w|gap|lg:gap|pl|pr|lg:pl|lg:pr|lg:pt|lg:pb)-.*/,
    },
    ...Array.from({ length: 22 }, (_, i) => `max-w-[${1100 + i * 30}px]`),
    "max-w-[1525px]",
    "max-w-[1695px]",
    "max-w-[1623px]",
    ...[...Array(100).keys()].flatMap((i) => [
      `w-[${i * 5}px]`,
      `h-[${i * 5}px]`,
    ]),
    ...[...Array(100).keys()].flatMap((i) => [
      `w-[-${i * 5}px]`,
      `h-[-${i * 5}px]`,
    ]),
    ...[...Array(100).keys()].flatMap((i) => [
      `w-[${i * 10}%]`,
      `h-[${i * 10}%]`,
    ]),
    ...[...Array(100).keys()].flatMap((i) => [
      `lg:w-[${i * 10}%]`,
      `lg:h-[${i * 10}%]`,
    ]),
    ...["xxs", "xs", "sm", "md", "lg", "xl", "2xl"].map(size => `lg:gap-${size}`),
    ...["none", "3xs", "xxs", "xs", "sm", "md", "lg", "xl", "2xl"].flatMap(size => 
      ["pt", "pb", "pl", "pr"].map(dir => `lg:${dir}-${size}`)
    )
  ],
};
