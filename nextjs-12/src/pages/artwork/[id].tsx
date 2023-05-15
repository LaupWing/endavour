import { ArrowLeftIcon, Colors, Hero, Layout } from "@/components"
import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { useRouter } from "next/router"

interface PageProps {
   data: ApiDetailResponse
}

const ArtworkDetail:NextPage<PageProps> = ({ data }) => {
   const router = useRouter()
   return (
      <Layout>
         <button 
            className="text-accent text-sm uppercase font-bold mb-2 flex items-center"
            onClick={() => router.back()}
         >
            <ArrowLeftIcon size={26} />
            Back
         </button>
         <Hero 
            artObject={data.artObject}
         />
         <Colors 
            colors={data.artObject.colors}
         />
         <table className="table-auto0 rounded overflow-hidden shadow mt-4">
            <thead className="bg-gray-300">
               <tr>
                  <th className="py-2 px-8">Type</th>
                  <th className="py-2 px-8">Value</th>
                  <th className="py-2 px-8">Unit</th>
               </tr>
            </thead>
            <tbody>
               {data.artObject.dimensions.map((size: any) => (
                  <tr>
                     <td className="px-2 py-1">{size.type}</td>
                     <td className="px-2 py-1">{size.value}</td>
                     <td className="px-2 py-1">{size.unit}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         <p className="text-2xl w-1/2 mt-12">
            {data.artObject.description}
         </p>
      </Layout>
   )
}
export default ArtworkDetail

export const getServerSideProps:GetServerSideProps<PageProps> = async ({query}) => {
   const res = await axios.get(`collection/${query.id}?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const data = res.data
   
   return {
      props: {
         data      
      }
   }
}
