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
   return (
      <div className="grid grid-cols-2">
         <div className="transform translate-x-[10%] my-auto flex flex-col items-start">
            <h2 className={`text-7xl ${playfair.className} flex flex-col items-start gap-2`}>
               <span className="border-t-2 border-primary">
                  {artObject.title.split(" ")[0]}
               </span>
               <span className="transform translate-x-[5%] border-y-2 border-primary">
                  {artObject.title.split(" ").splice(1,3).join(" ")}
               </span>
               <span className="border-b-2 border-primary">
                  {artObject.title.split(" ").splice(4).join(" ")}
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