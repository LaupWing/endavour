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
   const imageVariant = {
      hidden: {
         scaleX: 0.2,
         opacity: 0
      },
      inView: {
         scaleX: 1,
         opacity: 1,
         transition: {
            duration: 0.6
         }
      }
   }
   const textVariant = {
      hidden: {
         opacity: 0
      },
      inView: {
         opacity: 1,
         transition: {
            duration: 0.6,
            delay: 0.5
         }
      }
   }
   
   return (
      <motion.div
         className={`${index % 3 === 0 ? "col-span-2 aspect-video" : ""} flex flex-col justify-between`}
         initial="hidden"
         whileInView="inView"
      >
         <motion.div
            variants={imageVariant}
         >
            <ImageContainer 
               url={artObject.webImage.url}
               objectId={artObject.objectNumber}
            />
         </motion.div>
         <motion.div 
            className="mt-2 leading-4 flex justify-between items-center"
            variants={textVariant}
         >
            <div className="flex flex-col">
               <p>{artObject.title}</p>
               <p className="text-xs">By <span className="text-accent">{artObject.principalOrFirstMaker}</span></p>
            </div>
            <a href={artObject.links.web} target="_blank" rel="noopener noreferrer">
               <FiExternalLink className="text-accent cursor-pointer" size={16} />
            </a>
         </motion.div>
      </motion.div>
   )
}