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
         className="w-full h-full"
         href={`/artwork/${objectId}`}
      >
         <img 
            className="h-full w-full object-cover" 
            src={url} 
            alt="Artwork" 
         />
      </Link>
   )
}