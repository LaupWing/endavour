import { FC } from "react"
import { FiExternalLink } from "react-icons/fi"
import { ImageContainer } from "./ImageContainer"
import { motion } from "framer-motion"

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
         <motion.div
            initial={{
               scaleX: 0.2,
               opacity: 0
            }}
            whileInView={{
               scaleX: 1,
               opacity: 1,
               transition: {
                  duration: 0.6
               }
            }}
         >
            <ImageContainer 
               url={artObject.webImage.url}
               objectId={artObject.objectNumber}
            />
         </motion.div>
         <motion.div 
            className="mt-2 leading-4 flex justify-between items-center"
            initial={{
               scaleX: 0.2,
               opacity: 0
            }}
            whileInView={{
               scaleX: 1,
               opacity: 1,
               transition: {
                  duration: 0.6
               }
            }}
         >
            <div className="flex flex-col">
               <p>{artObject.title}</p>
               <p className="text-xs">By <span className="text-accent">{artObject.principalOrFirstMaker}</span></p>
            </div>
            <a href={artObject.links.web} target="_blank" rel="noopener noreferrer">
               <FiExternalLink className="text-accent cursor-pointer" size={16} />
            </a>
         </motion.div>
      </div>
   )
}