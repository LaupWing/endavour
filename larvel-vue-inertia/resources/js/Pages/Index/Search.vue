<template>
   hallo
   <!-- <h2 className="text-xl">Total {{data.length}} results found on search term: {{searchTerm}}</h2>
   <RouterLink
      v-for="artWork in artWorks"
      :to="`/artwork/${artWork.objectNumber}`"
      :key="artWork.id"
      className="flex"
   >
      <div className="md:w-32 w-20 flex-shrink-0 aspect-square">
         <img 
            v-if="artWork.webImage"
            className="h-full w-full object-cover" 
            :src="artWork.webImage.url" 
            alt="result image" 
         />
         <div
            v-else
            className="h-full w-full object-cover bg-accent/10"
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
   </RouterLink> -->
</template>

<script setup lang="ts">
defineProps<{
   data: ApiIndexResponse["artObjects"]
}>()
// @ts-ignore
const {searchTerm} = route().params
</script>