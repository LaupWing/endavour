import { playfair, poppins } from "@/utils/fonts"
import { ArrowRightIcon, SearchIcon } from "./Icons"
import socials from "@/utils/socials"
import { FC, PropsWithChildren } from "react"

export const Layout:FC<PropsWithChildren> = ({children}) => {
   return (
      <main
         className={`flex bg-contrast min-h-screen fixed inset-0 overflow-y-auto w-screen flex-col ${poppins.className}`}
      >
         <div className="py-6 px-14">
            <Header />
            <section className="py-10">
               {children}
            </section>
         </div>
         <Footer />
      </main>
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

const Footer = () => {
   return (
      <footer className="w-full border-t border-primary grid grid-cols-5 mt-auto">
         <div className="col-span-2 p-4 px-10 border-r border-primary flex flex-col">
            <p className="text-2xl uppercase max-w-[60%]">Signup to our news letter!</p>
            <p className="text-sm mt-2 ml-auto text-primary/40 flex items-center">
               ENTER YOUR EMAIL
               <ArrowRightIcon className="ml-1 text-accent" size={22} />
            </p>
         </div>
         <div className="col-span-1 grid grid-cols-2 text-sm border-r border-primary">
            <ul className="flex flex-col items-center justify-center">
               <div>
                  <li>About</li>
                  <li>Blogs</li>
                  <li>Videos</li>
                  <li>Press</li>
               </div>
            </ul>
            <ul className="flex flex-col items-center justify-center">
               <div>
                  <li>Visit</li>
                  <li>Events</li>
                  <li>Exhibitions</li>
                  <li>Art</li>
               </div>
            </ul>
         </div>
         <div className="col-span-2 grid grid-col-1 grid-rows-3">
            <div className="border-b border-primary flex gap-4 items-center px-4">
               {Object.keys(socials).map(key =>{
                  // @ts-ignore
                  const IconComponent = socials[key]
                  return (
                     <IconComponent size={16} />
                  )
               })}
            </div>
            <div className="row-span-2 flex text-sm flex-col justify-center px-4">
               <p>info@rijksmuseum.nl</p>
               <p>+31 (0) 20 6747 000</p>
            </div>
         </div>
      </footer>
   )
}