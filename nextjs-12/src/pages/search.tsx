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
   const router = useRouter()
   
   return (
      <Layout>
         <div className="flex flex-col gap-4">
            <h2 className="text-xl">Total {art_works.length} results found on search term: {router.query.searchTerm}</h2>
            {art_works.map(art_work => (
               <div
                  key={art_work.id}
                  className="flex"
               >
                  <div className="w-32 aspect-square">
                     <img className="h-full w-full object-cover" src={art_work.webImage.url} alt="" />
                  </div>
                  <div className="ml-2 py-2">
                     <h2>{art_work.title}</h2>
                     <p className="text-sm">By <span>{art_work.principalOrFirstMaker}</span></p>
                  </div>
               </div>
            ))}
         </div>
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