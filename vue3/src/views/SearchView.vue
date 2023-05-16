<template>
   <div 
      class="flex-1 flex justify-center items-center h-full uppercase text-accent animate-pulse font-bold tracking-wider text-sm"
      v-if="!artWorks && !loaded"
   >
      Loading
   </div>
   <div 
      class="flex flex-col gap-4"
      v-if="artWorks && loaded"
   >
      <h2 class="text-xl">Total {{artWorks.length}} results found on search term: {{searchTerm}}</h2>
      <RouterLink
         v-for="artWork in artWorks"
         :to="`/artwork/${artWork.objectNumber}`"
         :key="artWork.id"
         class="flex"
      >
         <div class="md:w-32 w-20 flex-shrink-0 aspect-square">
            <img 
               v-if="artWork.webImage"
               class="h-full w-full object-cover" 
               :src="artWork.webImage.url" 
               alt="result image" 
            />
            <div
               v-else
               class="h-full w-full object-cover bg-accent/10"
            />
         </div>
         <div class="ml-2 py-2">
            <h2 class="md:text-base text-sm">
               <Highlighter 
                  :searchWords="(searchTerm! as string).split(' ')"
                  :textToHighlight="artWork.title"
               />
            </h2>
            <p class="md:text-sm text-xs">
               By 
               <span>
                  <Highlighter 
                     :searchWords="(searchTerm! as string).split(' ')"
                     :textToHighlight="artWork.principalOrFirstMaker"
                  />
               </span>
            </p>
         </div>
      </RouterLink>
   </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import Highlighter from "vue-highlight-words"
import { useArtWorkStore } from "@/stores/artWorks"
import { ref } from "vue"
import { watch } from "vue"
import { computed } from "vue"

const route = useRoute()
const searchTerm = computed(() => route.query.searchTerm)
const artWorks = ref<ApiIndexResponse["artObjects"]>([])
const loaded = ref<boolean>(false)

const artWorkStore = useArtWorkStore()
const init = async () => {
   artWorks.value = await artWorkStore.fetchQuery(searchTerm.value as string)
   loaded.value = true
}

watch(
   searchTerm, 
   async ()=> {
      loaded.value = false
      artWorks.value = await artWorkStore.fetchQuery(searchTerm.value as string)
      loaded.value = true
      
})

if(!loaded.value){
   init()
}

</script>