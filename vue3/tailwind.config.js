/** @type {import('tailwindcss').Config} */
const withOpacityValue = (variable) => {
   return ({opacityValue}) => {
      if (opacityValue === undefined) {
         return `rgb(var(${variable}))`
      } else {
         return `rgb(var(${variable}) / ${opacityValue})`
      }
   }
}

module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
   theme: {
      fontFamily: {
         sans: ["Poppins", "sans-serif"],
         display: ["Playfair Display", "display"],
      },
      extend: {
         colors: {
            primary: withOpacityValue("--color-primary"),
            contrast: withOpacityValue("--color-contrast"),
            accent: withOpacityValue("--color-accent")
         }
      },
   },
   plugins: [
      require("@tailwindcss/forms")
   ],
}
