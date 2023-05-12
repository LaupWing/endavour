/** @type {import('tailwindcss').Config} */

const withOpacityValue = (variable) => {
   return ({opacityValue}) => {
      console.log(`rgb(var(${variable}))`)
      if (opacityValue === undefined) {
         return `rgb(var(${variable}))`
      } else {
         return `rgb(var(${variable}) / ${opacityValue})`
      }
   }
}

module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
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
