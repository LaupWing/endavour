import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { playfair, poppins } from "@/utils/fonts"
import { BsSearch, BsArrowRightShort } from "react-icons/bs"
import { Grid, Hero, Layout } from "@/components"
import socials from "@/utils/socials"

interface PageProps {
   data: ApiResponse
}

const Home:NextPage<PageProps> = ({data}) => {
   return (
      <Layout>
         <Hero
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
         </div>
      </Layout>
   )
}
export default Home
export const getServerSideProps:GetServerSideProps<PageProps> = async () => {
   const res = await axios.get("")
   const data = res.data
   
   return {
      props: {
         data      
      }
   }
}
