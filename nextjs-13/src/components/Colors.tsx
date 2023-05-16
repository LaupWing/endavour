import { FC } from "react"
import clsx from "clsx"

export const Colors:FC<{
   colors: any[],
   className?: string
}> = ({
   colors,
   className = ""
}) => {
   return (
      <div className={clsx("flex gap-2 items-center", className)}>
         <h3 className="font-bold">Colors</h3>
         {colors.map((color: any) => (
            <div 
               className="w-8 h-8 rounded-full border-2 border-black"
               style={{
                  backgroundColor: color.hex
               }}
            />
         ))}
      </div>
   )
}