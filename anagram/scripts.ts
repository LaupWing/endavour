const input = ["rope", "pore", "repo", "red rum", "murder", "listen", "silent", "endeavour"]


const anagramz = input.reduce((previous: any, current, currentIndex, array) => {
   if(current){
      // This also can be done in a recursive function to find an item in a nested array (no matter how deep the array is)
      // But I didn't solve this problem that way, because most of the time during development recursive functions make things unnessary complex
      // Plus I wanted to make something cool on the second assignment
      const alreadyExists = previous.find((x: string[]) => x.includes(current))
      if(alreadyExists){
         return [...previous]
      }
   }

   const letterList = (word: string) => (word.split("").filter(x => x !== "")) 
   const letters = letterList(current)
   const filteredOutCurrent = array.filter((_, index) => index !== currentIndex)
   const anagram = filteredOutCurrent.filter(x => letters.every(y => letterList(x).includes(y)) )
   
   return [...previous, [current, ...anagram]]
}, [])

console.log(anagramz)
