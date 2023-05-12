import { GetServerSideProps } from "next"
import axios from "@/utils/axios"
import { poppins } from "@/utils/fonts"


interface PageProps {

}

export default function Home({data}: any) {
   console.log(data)
   return (
      <main
         className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className}`}
      >
         test
      
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
