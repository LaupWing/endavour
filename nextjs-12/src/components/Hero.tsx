import { playfair, poppins } from "@/utils/fonts"
import { BsSearch } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"

export const Hero = () => {
   return (
      <div className="grid grid-cols-2">
         <div className="transform translate-x-[10%] my-auto flex flex-col items-start">
            <h2 className={`text-7xl ${playfair.className} flex flex-col items-start gap-2`}>
               <span className="border-t-2 border-primary">
                  {data.artObjects[0].title.split(" ")[0]}
               </span>
               <span className="transform translate-x-[5%] border-y-2 border-primary">
                  {data.artObjects[0].title.split(" ").splice(1,3).join(" ")}
               </span>
               <span className="border-b-2 border-primary">
                  {data.artObjects[0].title.split(" ").splice(4).join(" ")}
               </span>
            </h2>
            <p className="mt-6">By <span className="text-accent font-bold">{data.artObjects[0].principalOrFirstMaker}</span></p>
            <p className="text-accent italic">
               <a href={data.artObjects[0].links.web} target="_blank" className="flex gap-2 items-center">
                  Link to rijksmuseum <FiExternalLink size={16} />
               </a>
            </p>
         </div>
         <img src={data.artObjects[0].webImage.url} alt="" />
      </div>
   )
}