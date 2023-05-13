import { Layout } from "@/components"
import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"

interface PageProps {
   data: ArtObjectType
}

const ArtworkDetail:NextPage<PageProps> = ({ data }) => {
   console.log(data)
   return (
      <Layout>
         Artwork
      </Layout>
   )
}
export default ArtworkDetail

export const getServerSideProps:GetServerSideProps<PageProps> = async ({query}) => {
   console.log(query.id)

   const res = await axios.get(`collection/${query.id}?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const data = res.data
   
   return {
      props: {
         data      
      }
   }
}
