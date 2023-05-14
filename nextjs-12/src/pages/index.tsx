import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { Grid, Hero, Layout } from "@/components"

interface PageProps {
   data: ApiIndexResponse
}

const Home:NextPage<PageProps> = ({data}) => {
   const test = async () => {
      const _data = await fetch("https://www.rijksmuseum.nl/api/nl/collection?key=DiJ44l70")
      console.log(_data)
   }
   test()
   return (
      <Layout>
         {/* <Hero
            artObject={data.artObjects[0]}
         />
         <div className="grid grid-cols-3 gap-10 py-10">
            {[...data.artObjects].splice(1).map((item, i) => (
               <Grid 
                  artObject={item}
                  index={i}
                  key={item.id}
               />
            ))}
         </div> */}
      </Layout>
   )
}
export default Home
export const getServerSideProps:GetServerSideProps<PageProps> = async () => {
   // const res = await axios.get(`collection?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const res = await fetch(`https://645df91512e0a87ac0e43712.mockapi.io/users`)
   
   // const data = res.data
   
   return {
      props: {
         data: {}      
      }
   }
}
