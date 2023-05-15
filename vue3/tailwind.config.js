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
      extend: {
         colors: {
            primary: withOpacityValue("--color-primary"),
            contrast: withOpacityValue("--color-contrast"),
            accent: withOpacityValue("--color-accent")
         }
      },
   },
   plugins: [],
}
