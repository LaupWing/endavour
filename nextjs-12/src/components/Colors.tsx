import { FC } from "react"

export const Colors:FC<{
   colors: any[]
}> = ({
   colors
}) => {
   return (
      <div className="flex gap-2 items-center">
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