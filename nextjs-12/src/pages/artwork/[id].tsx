import { Hero, Layout } from "@/components"
import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"

interface PageProps {
   data: ApiDetailResponse
}

const ArtworkDetail:NextPage<PageProps> = ({ data }) => {
   console.log(data)
   return (
      <Layout>
         <Hero 
            artObject={data.artObject}
         />
         <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-black"></div>
         </div>
      </Layout>
   )
}
export default ArtworkDetail

export const getServerSideProps:GetServerSideProps<PageProps> = async ({query}) => {
   const res = await axios.get(`collection/${query.id}?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const data = res.data
   
   return {
      props: {
         data      
      }
   }
}
