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


export default {
   content: [
      "./storage/framework/views/*.php",
      "./resources/views/**/*.blade.php",
      "./resources/js/**/*vue",
   ],
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
};
