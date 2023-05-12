import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { playfair, poppins } from "@/utils/fonts"
import { BsSearch } from "react-icons/bs"

interface PageProps {
   data: ApiResponse
}

const Home:NextPage<PageProps> = ({data}) => {
   console.log(data)
   return (
      <main
         className={`flex bg-contrast py-6 px-14 min-h-screen w-screen flex-col justify-between ${poppins.className}`}
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
