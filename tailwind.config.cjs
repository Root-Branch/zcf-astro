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
        "none": "0rem",
        "3xs": "1rem",
        "xxs": "2rem",
        "xs": "4rem",
        "sm": "6rem",
        "md": "8rem",
        "lg": "10rem",
        "xl": "12rem",
        "2xl": "16rem",
      },
      gap: {
        "none": "0rem",
        "xs": "4rem",
        "sm": "6rem",
        "md": "8rem",
        "lg": "10rem",
        "xl": "12rem",
        "2xl": "16rem",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|font|pt|pb|w|gap|lg:gap|pl|pr|lg:pl|lg:pr|lg:pt|lg:pb)-.*/,
    },
    "max-w-[1100px]",
    "max-w-[1525px]",
    "max-w-[1695px]",
    "max-w-[1623px]",
    "max-w-[1130px]",
    "max-w-[1160px]",
    "max-w-[1190px]",
    "max-w-[1220px]",
    "max-w-[1250px]",
    "max-w-[1280px]",
    "max-w-[1310px]",
    "max-w-[1340px]",
    "max-w-[1370px]",
    "max-w-[1400px]",
    "max-w-[1430px]",
    "max-w-[1460px]",
    "max-w-[1490px]",
    "max-w-[1520px]",
    "max-w-[1550px]",
    "max-w-[1580px]",
    "max-w-[1610px]",
    "max-w-[1640px]",
    "max-w-[1670px]",
    "max-w-[1700px]",
    ...[...Array(100).keys()].flatMap(i => [`w-[${i*5}px]`, `h-[${i*5}px]`]),
    ...[...Array(100).keys()].flatMap(i => [`w-[-${i*5}px]`, `h-[-${i*5}px]`]),
    ...[...Array(100).keys()].flatMap(i => [`w-[${i*10}%]`, `h-[${i*10}%]`]),
    ...[...Array(100).keys()].flatMap(i => [`lg:w-[${i*10}%]`, `lg:h-[${i*10}%]`]),
    "lg:gap-xxs",
    "lg:gap-xs",
    "lg:gap-sm",
    "lg:gap-md",
    "lg:gap-lg",
    "lg:gap-xl",
    "lg:gap-2xl",
    "lg:pt-none",
    "lg:pb-none",
    "lg:pl-none",
    "lg:pr-none",
    "lg:pt-3xs",
    "lg:pb-3xs",
    "lg:pl-3xs",
    "lg:pr-3xs",
    "lg:pt-xxs",
    "lg:pb-xxs",
    "lg:pl-xxs",
    "lg:pr-xxs",
    "lg:pt-xs",
    "lg:pb-xs",
    "lg:pl-xs",
    "lg:pr-xs",
    "lg:pt-sm",
    "lg:pb-sm",
    "lg:pl-sm",
    "lg:pr-sm",
    "lg:pt-md",
    "lg:pb-md",
    "lg:pl-md",
    "lg:pr-md",
    "lg:pt-lg",
    "lg:pb-lg",
    "lg:pl-lg",
    "lg:pr-lg",
    "lg:pt-xl",
    "lg:pb-xl",
    "lg:pl-xl",
    "lg:pr-xl",
    "lg:pt-2xl",
    "lg:pb-2xl",
    "lg:pl-2xl",
    "lg:pr-2xl",
  ],
};
