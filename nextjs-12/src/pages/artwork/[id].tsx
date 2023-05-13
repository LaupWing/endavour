import { Layout } from "@/components"
import { NextPage } from "next"
import { useRouter } from "next/router"

const ArtworkDetail:NextPage = () => {
   const router = useRouter()
   console.log(router.query)
   return (
      <Layout>
         Artwork
      </Layout>
   )
}
export default ArtworkDetail