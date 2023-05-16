<template>
   <div className="flex flex-col gap-4">
      <h2 className="text-xl">Total {{artWorks.length}} results found on search term: {{searchTerm}}</h2>
      <RouterLink
         v-for="artWork in artWorks"
         :to="`/artwork/${artWork.objectNumber}`"
         :key="artWork.id"
         className="flex"
      >
         <div className="md:w-32 w-20 flex-shrink-0 aspect-square">
            <img 
               className="h-full w-full object-cover" 
               :src="artWork.webImage.url" 
               alt="result image" 
            />
         </div>
         <div className="ml-2 py-2">
            <h2 className="md:text-base text-sm">
               <Highlighter 
                  :searchWords="(searchTerm! as string).split(' ')"
                  :textToHighlight="artWork.title"
               />
            </h2>
            <p className="md:text-sm text-xs">
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
import { useArtWorkStore } from "@/stores/artWorks";
import { ref } from "vue";

export interface Props {
   artWorks: ApiIndexResponse["artObjects"]
}
const route = useRoute()
const { searchTerm } = route.query
const data = ref<ApiIndexResponse["artObjects"]>([])
const loaded = ref<boolean>(false)

const artWorkStore = useArtWorkStore()
const init = async () => {
   data.value = await artWorkStore.fetchQuery()
}

if(!loaded.value){
   init()
}

defineProps<Props>()
</script>