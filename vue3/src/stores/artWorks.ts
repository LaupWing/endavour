import { ref } from "vue"
import { defineStore } from "pinia"
import { useRoute } from "vue-router"

export const useArtWorkStore = defineStore("art_works", () => {
   const artWorks = ref<ApiIndexResponse["artObjects"]>([])
   const baseUrl = "https://www.rijksmuseum.nl/api/nl/" 
   const apiKey = import.meta.env.VITE_RIJKS_MUSEUM_APIKEY

   const fetchAll = async () => {
      const res = await fetch(`${baseUrl}collection?key=${apiKey}`)
      const data = await res.json() as ApiIndexResponse
      artWorks.value = data.artObjects
   }

   const fetchSingle = async () => {
      const route = useRoute()
      const res = await fetch(`${baseUrl}collection/${route.params.id}?key=${apiKey}`)
      const data = await res.json() as ApiDetailResponse
      
      return data.artObject
   }

   return { 
      fetchAll,
      fetchSingle,
      artWorks
   }
})
