import { Hero } from "@/components/Hero"
import axios from "@/utils/axios"

const fetchArtWorks = async () => {
   const res = await axios.get(`collection?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const data = res.data as ApiIndexResponse

   return data.artObjects
}

export default async function Home() {
   const art_works = await fetchArtWorks()

   return (
      <>
         <Hero 
            artObject={art_works[0]}
         />
      </>
   )
}
