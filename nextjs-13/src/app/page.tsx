import { Grid } from "@/components"
import { Hero } from "@/components"
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
         <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
            {[...art_works].splice(1).map((item, i) => (
               <Grid 
                  artObject={item}
                  index={i}
                  key={item.id}
               />
            ))}
         </div>
      </>
   )
}
