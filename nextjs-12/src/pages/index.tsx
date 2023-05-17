import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { Grid, Hero, Layout } from "@/components"
import { useState } from "react"

interface PageProps {
   art_works: ApiIndexResponse["artObjects"]
}

const Home:NextPage<PageProps> = ({ art_works }) => {
   const [animationEnded, setAnimationEnded] = useState<boolean>(false)
   return (
      <Layout>
         <Hero
            artObject={art_works[0]}
            setAnimationEnded={setAnimationEnded}
         />
         {animationEnded && <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
            {[...art_works].splice(1).map((item, i) => (
               <Grid 
                  artObject={item}
                  index={i}
                  key={item.id}
               />
            ))}
         </div>}
      </Layout>
   )
}
export default Home
export const getServerSideProps:GetServerSideProps<PageProps> = async () => {
   const res = await axios.get(`collection?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const data = res.data as ApiIndexResponse
   
   return {
      props: {
         art_works: data.artObjects      
      }
   }
}
