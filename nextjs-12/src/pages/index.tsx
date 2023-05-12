import Image from "next/image"
import { Inter } from "next/font/google"
import { GetServerSideProps } from "next"
import axios from "../axios"

const inter = Inter({ subsets: ["latin"] })

interface PageProps {

}

export default function Home({data}: any) {
   console.log(data)
   return (
      <main
         className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
         
      
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
