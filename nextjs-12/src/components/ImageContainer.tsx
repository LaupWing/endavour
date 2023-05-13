import Link from "next/link"
import { FC } from "react"

export const ImageContainer:FC<{
   url: string
   objectId: string
}> = ({
   url,
   objectId
}) => {
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