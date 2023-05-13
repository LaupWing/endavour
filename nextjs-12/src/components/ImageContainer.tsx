import { FC } from "react"

export const ImageContainer:FC<{
   url: string
}> = ({
   url
}) => {
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