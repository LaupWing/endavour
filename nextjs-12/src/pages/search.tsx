import { Layout } from "@/components"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import axios from "../utils/axios"

interface PageProps {
   art_works: ApiIndexResponse["artObjects"]
}

const Search:NextPage<PageProps> = ({
   art_works
}) => {
   console.log(art_works)
   return (
      <Layout>
         
      </Layout>
   )
}

export default Search

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
   const { searchTerm } = query
   const res = await axios.get(`collection?key=${process.env.RIJKS_MUSEUM_APIKEY}&q=${searchTerm}`)
   const data = res.data as ApiIndexResponse
   return {
      props: {
         art_works: data.artObjects
      }
   }
}