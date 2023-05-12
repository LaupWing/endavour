import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { playfair, poppins } from "@/utils/fonts"
import { BsSearch } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"
import { Hero } from "@/components"

interface PageProps {
   data: ApiResponse
}

const Home:NextPage<PageProps> = ({data}) => {
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
            <Hero
               artObject={data.artObjects[0]}
            />
            <div className="grid grid-cols-3 gap-10 py-10">
               {[...data.artObjects].splice(1).map((item, i) => (
                  <div
                     key={item.id}
                     className={`${i % 3 === 0 ? "col-span-2 aspect-video" : ""} flex flex-col justify-between`}
                  >
                     <img 
                        className="h-full w-full object-cover" 
                        src={item.webImage.url} 
                        alt="Artwork" 
                     />
                     <div className="mt-2 leading-4 flex justify-between items-center">
                        <div className="flex flex-col">
                           <p>{item.title}</p>
                           <p className="text-xs">By <span className="text-accent">{item.principalOrFirstMaker}</span></p>
                        </div>
                        <FiExternalLink className="text-accent cursor-pointer" size={16} />
                     </div>
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
