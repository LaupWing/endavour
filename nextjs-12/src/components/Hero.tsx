import { playfair } from "@/utils/fonts"
import { FC } from "react"
import { FiExternalLink } from "react-icons/fi"
import { ImageContainer } from "./ImageContainer"

interface HeroProps {
   artObject: ArtObjectType
}

export const Hero:FC<HeroProps> = ({
   artObject
}) => {
   const titleSplitted = artObject.title.split(" ")
   const lowerAmount =  Math.floor(titleSplitted.length / 3) 
   const higherAmount =  Math.ceil(titleSplitted.length / 3)

   return (
      <div className="grid grid-cols-2">
         <div className="transform translate-x-[10%] my-auto flex flex-col items-start">
            <h2 className={`text-7xl ${playfair.className} flex flex-col items-start gap-2`}>
               <span className="border-t-2 border-primary">
                  {[...titleSplitted].splice(0, lowerAmount).join(" ")}
               </span>
               <span className="transform translate-x-[5%] border-y-2 border-primary">
                  {[...titleSplitted].splice(lowerAmount, higherAmount).join(" ")}
               </span>
               <span className="border-b-2 border-primary">
                  {[...titleSplitted].splice(lowerAmount + higherAmount).join(" ")}
               </span>
            </h2>
            <p className="mt-6">By <span className="text-accent font-bold">{artObject.principalOrFirstMaker}</span></p>
            <p className="text-accent italic">
               <a href={artObject.links.web} target="_blank" className="flex gap-2 items-center">
                  Link to rijksmuseum <FiExternalLink size={16} />
               </a>
            </p>
         </div>
         <ImageContainer 
            url={artObject.webImage.url}
            objectId={artObject.objectNumber}
         />
      </div>
   )
}