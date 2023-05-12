import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { playfair, poppins } from "@/utils/fonts"
import { BsSearch } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"

interface PageProps {
   data: ApiResponse
}

const Home:NextPage<PageProps> = ({data}) => {
   console.log()
   return (
      <main
         className={`flex bg-contrast py-6 px-14 min-h-screen fixed inset-0 overflow-y-auto w-screen flex-col ${poppins.className}`}
      >
         <header className="flex border-b border-primary pb-4 justify-between">
            <h1 className={`${playfair.className} font-bold text-2xl flex flex-col leading-5`}>
               <span className="text-accent">Rijks</span>
               <span className="">Museum</span>
            </h1>
            <div className="flex items-center mr-4">
               <nav className="mr-8">
                  <ul className="flex gap-4">
                     <li>Works</li>
                     <li>Artists</li>
                  </ul>
               </nav>
               <BsSearch size={22}/>
            </div>
         </header>
         <section className="py-10">
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
                        Link to rijksmuseum <FiExternalLink className="" size={16} />
                     </a>
                  </p>
               </div>
               <img src={data.artObjects[0].webImage.url} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-10 py-10">
               {[...data.artObjects].splice(1).map((item, i) => (
                  <div
                     key={item.id}
                     className={`${i % 3 === 0 ? "col-span-2 aspect-video" : ""}`}
                  >
                     <img 
                        className="h-full w-full object-cover" 
                        src={item.webImage.url} 
                        alt="Artwork" 
                     />
                  </div>
               ))}
            </div>
         </section>
      </main>
   )
}
export default Home
export const getServerSideProps:GetServerSideProps<PageProps> = async () => {
   const res = await axios.get("")
   const data = res.data
   
   return {
      props: {
         data      
      }
   }
}
