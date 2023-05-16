import axios from "@/utils/axios"
import Link from "next/link"
import Highlighter from "react-highlight-words"

const fetchArtWorks = async (searchTerm: string) => {
   const res = await axios.get(`collection?key=${process.env.RIJKS_MUSEUM_APIKEY}&q=${searchTerm}`)
   const data = res.data as ApiIndexResponse

   return data.artObjects
}

export default async function Search({
   searchParams
}: {
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const {searchTerm} = searchParams
   const art_works = await fetchArtWorks(searchTerm as string)
   
   return (
      <div className="flex flex-col gap-4">
         <h2 className="text-xl">Total {art_works.length} results found on search term: {searchTerm}</h2>
         {art_works.map(art_work => (
            <Link
               href={`/artwork/${art_work.objectNumber}`}
               key={art_work.id}
               className="flex"
            >
               <div className="md:w-32 w-20 flex-shrink-0 aspect-square">
                  <img 
                     className="h-full w-full object-cover" 
                     src={art_work.webImage.url} 
                     alt="result image" 
                  />
               </div>
               <div className="ml-2 py-2">
                  <h2 className="md:text-base text-sm">
                     <Highlighter 
                        searchWords={(searchTerm! as string).split(" ")}
                        textToHighlight={art_work.title}
                     />
                  </h2>
                  <p className="md:text-sm text-xs">
                     By 
                     <span>
                        <Highlighter 
                           searchWords={(searchTerm! as string).split(" ")}
                           textToHighlight={art_work.principalOrFirstMaker}
                        />
                     </span>
                  </p>
               </div>
            </Link>
         ))}
      </div>
   )
}
