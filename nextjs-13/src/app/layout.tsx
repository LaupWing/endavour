"use client"
import { playfair, poppins } from "@/utils/fonts"
import "./globals.css"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"
import { ArrowRightIcon, CloseIcon, SearchIcon } from "@/components"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import clsx from "clsx"
import socials from "@/utils/socials"
import "nprogress/nprogress.css"
import NProgress from "nprogress"

// export const metadata = {
//    title: "Endeavour: assignment nextjs 13",
//    description: "Generated by create next app",
// }

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   const pathname = usePathname()
   const searchParams = useSearchParams()

   useEffect(() => {
      NProgress.start()
  }, [pathname ]);

  useEffect(() => {
      NProgress.done()
  }, [ searchParams])
   return (
      <html lang="en">
         <body className={`flex bg-contrast min-h-screen overflow-y-auto flex-col ${poppins.className}`}>
            <div className="px-4 md:px-14">
               <Header />
               <main className="py-10">
                  {children}
               </main>
            </div>
            <Footer />
         </body>
      </html>
   )
}


interface FormValues {
   searchTerm: string
}

const Header = () => {
   const [showSearch, setShowSearch] = useState(false)
   const router = useRouter()

   const {
      register,
      reset,
      formState: {
         errors
      },
      handleSubmit
   } = useForm<FormValues>({
      defaultValues: {
         searchTerm: ""
      }
   })
   const submitHandler: SubmitHandler<FormValues> = ({ searchTerm }) => {
      reset()
      const params = new URLSearchParams()
      params.set("searchTerm", searchTerm)
      router.push(`/search?${params.toString()}`)
   }

   return (
      <header className="flex border-b border-primary py-4 justify-between sticky top-0 bg-contrast z-50">
         {showSearch && (
            <form 
               className="absolute inset-0 bg-contrast/95 flex items-center p-2"
               onSubmit={handleSubmit(submitHandler)}
            >
               <div className="flex flex-1 items-center relative">
                  <input 
                     type="text" 
                     className={
                        clsx(
                           "flex-1 rounded",
                           errors.searchTerm ? "border-red-400" : "border-slate-300"
                        )
                     } 
                     placeholder="What are you searching for?"
                     {...register("searchTerm", {
                        required: "Search field cannot be empty!"
                     })}
                  />
                  {errors.searchTerm && <span className="absolute px-2 pt-[2px] bottom-0 translate-y-full bg-red-500 left-1 rounded-b text-contrast text-[8px] uppercase">{errors.searchTerm.message}</span>}
                  <button 
                     type="submit"
                     className="absolute right-4 text-gray-400" 
                  >
                     <SearchIcon size={22}/>
                  </button>
               </div>
               <button 
                  className="px-1"
                  onClick={() => setShowSearch(false)}
                  type="button"
               >
                  <CloseIcon className="text-slate-500" size={30} />
               </button>
            </form>
         )}
         <Link href={"/"}>
            <h1 className={`${playfair.className} font-bold text-2xl flex flex-col leading-5`}>
               <span className="text-accent">Rijks</span>
               <span className="">Museum</span>
            </h1>
         </Link>
         <div className="flex items-center mr-1 md:mr-4">
            <nav className="mr-8">
               <ul className="flex gap-4">
                  <li>Works</li>
                  <li>Artists</li>
               </ul>
            </nav>
            <button onClick={() => setShowSearch(true)}>
               <SearchIcon size={22}/>
            </button>
         </div>
      </header>
   )
}

const Footer = () => {
   return (
      <footer className="w-full border-t border-primary grid grid-cols-1 md:grid-cols-5 mt-auto">
         <div className="col-span-2 p-4 px-10 md:border-r border-primary flex flex-col">
            <p className="md:text-2xl text-lg uppercase max-w-[80%] md:max-w-[60%]">Signup to our news letter!</p>
            <p className="text-sm mt-2 ml-auto text-primary/40 flex items-center">
               ENTER YOUR EMAIL
               <ArrowRightIcon className="ml-1 text-accent" size={22} />
            </p>
         </div>
         <div className="col-span-1 grid grid-cols-2 py-4 md:py-0 text-sm border-t md:border-t-0 md:border-r border-primary">
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
            <div className="border-b flex gap-4 items-center px-4  border-primary border-t md:border-t-0 py-4 md:py-0">
               {Object.keys(socials).map(key =>{
                  const IconComponent = socials[key as keyof typeof socials]
                  return (
                     <IconComponent 
                        size={16} 
                        key={key}
                     />
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