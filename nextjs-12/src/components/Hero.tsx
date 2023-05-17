import { playfair } from "@/utils/fonts"
import { FC } from "react"
import { FiExternalLink } from "react-icons/fi"
import { ImageContainer } from "./ImageContainer"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

interface HeroProps {
   artObject: ArtObjectType
}

export const Hero:FC<HeroProps> = ({
   artObject
}) => {
   const titleSplitted = artObject.title.split(" ")
   const lowerAmount =  Math.floor(titleSplitted.length / 3) 
   const higherAmount =  Math.ceil(titleSplitted.length / 3)
   const router = useRouter()

   const scaleYVariant = {
      hidden: {
         scaleX: 0.1,
         opacity: 0
      },
      show: {
         scaleX: 1,
         opacity: 1,
         transition: {
            ease: "easeOut",
            delay: 0.8,
            duration: 0.8,
         }
      }
   }
   const headingVariant = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.65,
         },
      },
   }
   const headingItemVariant = {
      hidden: { 
         scaleY: 0
      },
      show: {
         scaleY: 1,
         transition: {
            duration: 0.4,
            staggerChildren: 0.2,
            delayChildren: 0.65,
         },
      },
   }
   const subTitleVariant = {
      hidden: { 
         y: "100%",
         opacity: 0
      },
      show: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            delay: 1,
         },
      },
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
         <div className="transform bottom-2 bg-contrast/60 backdrop-blur p-4 rounded absolute md:relative md:bg-transparent md:backdrop-blur-0 translate-x-[10%] my-auto flex flex-col items-start z-40">
            <motion.h2 
               className={`text-2xl md:text-5xl lg:text-7xl ${playfair.className} flex flex-col items-start gap-2`}
               variants={headingVariant}
               animate="show"
               initial="hidden"
            >
               <motion.span 
                  className="border-t-2 border-primary"
                  variants={headingItemVariant}
               >
                  {[...titleSplitted].splice(0, lowerAmount).join(" ")}
               </motion.span>
               <motion.span 
                  className="transform translate-x-[5%] border-y-2 border-primary"
                  variants={headingItemVariant}
               >
                  {[...titleSplitted].splice(lowerAmount, higherAmount).join(" ")}
               </motion.span>
               <motion.span 
                  className="border-b-2 border-primary"
                  variants={headingItemVariant}
               >
                  {[...titleSplitted].splice(lowerAmount + higherAmount).join(" ")}
               </motion.span>
            </motion.h2>
            <motion.p 
               className="mt-6"
               variants={subTitleVariant}
               animate="show"
               initial="hidden"
            >
               By <span className="text-accent font-bold">{artObject.principalOrFirstMaker}</span></motion.p>
            <motion.p 
               className="text-accent italic"
               variants={subTitleVariant}
               animate="show"
               initial="hidden"
            >
               <a href={artObject.links.web} target="_blank" className="flex gap-2 items-center">
                  Link to rijksmuseum <FiExternalLink size={16} />
               </a>
            </motion.p>
         </div>
         <motion.div 
            className="aspect-square"
            variants={scaleYVariant}
            animate="show"
            initial="hidden"
         >
            <ImageContainer 
               url={artObject.webImage.url}
               objectId={artObject.objectNumber}
               disableLink={!!router.query.id}
            />
         </motion.div>
      </div>
   )
}