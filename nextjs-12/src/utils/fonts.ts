import { Poppins, Playfair_Display } from "next/font/google"

export const poppins = Poppins({ 
   weight: "400",
   subsets: ["latin"] 
})

export const playfair = Playfair_Display({ 
   weight: ["400", "700"],
   subsets: ["latin"] 
})