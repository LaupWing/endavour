import { ref } from "vue"
import { defineStore } from "pinia"

export const useArtWorkStore = defineStore("art_works", () => {
   const artWorks = ref([])
   const baseUrl = "https://www.rijksmuseum.nl/api/nl/" 

   const fetchAll = async () => {
      const apiKey = import.meta.env.VITE_RIJKS_MUSEUM_APIKEY
      const res = await fetch(`${baseUrl}${apiKey}`)
      console.log(res)
   }

   const fetchSingle = async () => {

   }

   return { fetchAll }
})
