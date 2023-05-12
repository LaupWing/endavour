import { playfair } from "@/utils/fonts"
import { SearchIcon } from "./Icons"

export const Layout = () => {
   return (
      <div>
         
      </div>
   )
}

const Header = () => {
   return (
      <header className="flex border-b border-primary pb-4 justify-between">
         <h1 className={`${playfair.className} font-bold text-2xl flex flex-col leading-5`}>
            <span className="text-accent">Rijks</span>
            <span className="">Museum</span>
         </h1>
         <div className="flex items-center mr-4">
            <nav className="mr-8">
               <ul className="flex gap-4">
                  <li>Works</li>
                  <li>Artists</li>
               </ul>
            </nav>
            <SearchIcon size={22}/>
         </div>
      </header>
   )
}