"use client"
import { playfair } from "@/utils/fonts"
import { FC } from "react"
import { FiExternalLink } from "react-icons/fi"
import { ImageContainer } from "./ImageContainer"
import { useParams } from "next/navigation"

interface HeroProps {
   artObject: ArtObjectType
}

export const Hero:FC<HeroProps> = ({
   artObject
}) => {
   const titleSplitted = artObject.title.split(" ")
   const lowerAmount =  Math.floor(titleSplitted.length / 3) 
   const higherAmount =  Math.ceil(titleSplitted.length / 3)
   const params = useParams()

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
         <div className="transform bottom-2 bg-contrast/60 backdrop-blur p-4 rounded absolute md:relative md:bg-transparent md:backdrop-blur-0 translate-x-[10%] my-auto flex flex-col items-start">
            <h2 className={`text-2xl md:text-5xl lg:text-7xl ${playfair.className} flex flex-col items-start gap-2`}>
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
         <div className="aspect-square">
            <ImageContainer 
               url={artObject.webImage.url}
               objectId={artObject.objectNumber}
               disableLink={!!params.id}
            />
         </div>
      </div>
   )
}