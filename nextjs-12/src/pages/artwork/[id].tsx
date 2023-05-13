import { Layout } from "@/components"
import { NextPage } from "next"

const ArtworkDetail:NextPage = (request) => {
   console.log(request)
   return (
      <Layout>
         Artwork
      </Layout>
   )
}
export default ArtworkDetail