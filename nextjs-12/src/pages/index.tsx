import { GetServerSideProps } from "next"
import axios from "@/utils/axios"
import { playfair, poppins } from "@/utils/fonts"


interface PageProps {

}

export default function Home({data}: any) {
   // console.log(data)
   return (
      <main
         className={`flex bg-contrast py-6 px-10 min-h-screen w-screen flex-col justify-between ${poppins.className}`}
      >
         <header className="flex border-b border-primary pb-4">
            <h1 className={`${playfair.className} font-bold text-2xl flex flex-col leading-5`}>
               <span className="text-accent">Rijks</span>
               <span className="">Museum</span>
            </h1>
         </header>
      </main>
   )
}

export const getServerSideProps:GetServerSideProps<PageProps> = async () => {
   const res = await axios.get("")
   const data = res.data
   
   return {
      props: {
         data      
      }
   }
}
