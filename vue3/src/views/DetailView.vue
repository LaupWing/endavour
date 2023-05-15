<template>
   <button 
      class="text-accent text-sm uppercase font-bold mb-2 flex items-center"
      @click="router.back"
   >
      <ArrowLeftIcon class="w-5" />
      Back
   </button>
   <div 
      class="flex-1 flex justify-center items-center h-full uppercase text-accent animate-pulse font-bold tracking-wider text-sm"
      v-if="!data && !loaded"
   >
      Loading
   </div>
   <div 
      class="flex flex-1 flex-col items-start"
      v-if="data && !loaded"
   >
      <Hero 
         :artObject="data"
      />
      <Colors
         :colors="data.colors"
      />
      <table class="table-auto rounded overflow-hidden shadow mt-4">
         <thead class="bg-gray-300">
            <tr>
               <th class="py-2 px-8">Type</th>
               <th class="py-2 px-8">Value</th>
               <th class="py-2 px-8">Unit</th>
            </tr>
         </thead>
         <tbody>
               <tr
                  v-for="size of data.dimensions"
               >
                  <td class="px-2 py-1">{{size.type}}</td>
                  <td class="px-2 py-1">{{size.value}}</td>
                  <td class="px-2 py-1">{{size.unit}}</td>
               </tr>
         </tbody>
      </table>
      <p class="md:text-2xl text-xl md:w-1/2 mt-12">
         {{data.description}}
      </p>
   </div>
</template>

<script setup lang="ts">
import Colors from "@/components/Colors.vue"
import Grid from "@/components/Grid.vue"
import Hero from "@/components/Hero.vue"
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue"
import { useArtWorkStore } from "@/stores/artWorks"
import { ref } from "vue"
import { useRouter } from "vue-router"

const artWorkStore = useArtWorkStore()
const router = useRouter()

const loaded = ref<boolean>(false)
const data = ref<ArtObjectType>()
console.log(data)

const init = async () => {
   data.value = await artWorkStore.fetchSingle()
}
if(!loaded.value){
   init()
}

</script>
