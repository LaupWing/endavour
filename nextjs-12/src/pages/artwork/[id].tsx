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
