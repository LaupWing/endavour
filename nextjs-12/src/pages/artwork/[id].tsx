import { Hero, Layout } from "@/components"
import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"

interface PageProps {
   data: ApiDetailResponse
}

const ArtworkDetail:NextPage<PageProps> = ({ data }) => {
   console.log(data)
   return (
      <Layout>
         <Hero 
            artObject={data.artObject}
         />
         <div className="flex gap-2 items-center">
            <h3 className="font-bold">Colors</h3>
            {data.artObject.colors.map((color: any) => (
               <div 
                  className="w-8 h-8 rounded-full border-2 border-black"
                  style={{
                     backgroundColor: color.hex
                  }}
               />
            ))}
         </div>
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
