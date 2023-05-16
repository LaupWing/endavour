import { ArrowLeftIcon, Hero } from "@/components"
import { GetServerSideProps, NextPage } from "next"
import axios from "@/utils/axios"
import { useRouter } from "next/router"
import Link from "next/link"

const fetchDetail = async (id: string) => {
   const res = await axios.get(`collection/${id}?key=${process.env.RIJKS_MUSEUM_APIKEY}`)
   const data = res.data
   
   return data 
}


export default async function ArtworkDetail({
   params
}: {
   params: { id: string }
}) {
   const data = await fetchDetail(params.id)

   return (
      <>
         <Link href={"/"}>
            <button 
               className="text-accent text-sm uppercase font-bold mb-2 flex items-center"
            >
               <ArrowLeftIcon size={26} />
               Back
            </button>
         </Link>
         <Hero 
            artObject={data.artObject}
         />
         {/* <Colors 
            colors={data.artObject.colors}
            className="mt-4"
         /> */}
         <table className="table-auto rounded overflow-hidden shadow mt-4">
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
         <p className="md:text-2xl text-xl md:w-1/2 mt-12">
            {data.artObject.description}
         </p>
      </>
   )
}