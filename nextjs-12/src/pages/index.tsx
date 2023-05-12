import { GetServerSideProps } from "next"
import axios from "@/utils/axios"
import { poppins } from "@/utils/fonts"


interface PageProps {

}

export default function Home({data}: any) {
   // console.log(data)
   return (
      <main
         className={`flex bg-contrast min-h-screen w-screen flex-col justify-between ${poppins.className}`}
      >
         <header className="flex">
            <h1>
               <span>Rijks</span>
               <span>Museum</span>
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
