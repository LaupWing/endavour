import { playfair } from "@/utils/fonts"
import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"

export const ImageContainer:FC<{
   url: string
   objectId: string
   disableLink?: boolean
}> = ({
   url,
   objectId,
   disableLink = false
}) => {
   if(disableLink){
      return (
         <div className="w-full h-full">
            <img 
               className="h-full w-full object-cover" 
               src={url} 
               alt="Artwork" 
            />
         </div>
      )
   }

   return (
      <Link 
         className="w-full h-full relative overflow-hidden group"
         href={`/artwork/${objectId}`}
      >
         <img 
            className="h-full w-full object-cover" 
            src={url} 
            alt="Artwork" 
         />
         <div className="absolute opacity-0 duration-300 group-hover:opacity-100 inset-0 bg-contrast/70 text-accent flex items-center justify-center">
            <h3 className={clsx("text-2xl scale-150 group-hover:scale-100  duration-300", playfair.className)}>Read more</h3>
         </div>
      </Link>
   )
}