import { FC } from "react"
import { FiExternalLink } from "react-icons/fi"
import { ImageContainer } from "./ImageContainer"

interface GridProps {
   artObject: ArtObjectType
   index: number
}

export const Grid:FC<GridProps> = ({
   index,
   artObject
}) => {
   
   return (
      <div
         className={`${index % 3 === 0 ? "col-span-2 aspect-video" : ""} flex flex-col justify-between`}
      >
         <ImageContainer 
            url={artObject.webImage.url}
            objectId={artObject.objectNumber}
         />
         <div className="mt-2 leading-4 flex justify-between items-center">
            <div className="flex flex-col">
               <p>{artObject.title}</p>
               <p className="text-xs">By <span className="text-accent">{artObject.principalOrFirstMaker}</span></p>
            </div>
            <FiExternalLink className="text-accent cursor-pointer" size={16} />
         </div>
      </div>
   )
}