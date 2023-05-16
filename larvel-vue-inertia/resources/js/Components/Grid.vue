<template>
   <div
      class=" flex flex-col justify-between"
      :class="index % 3 === 0 ? 'col-span-2 aspect-video' : ''" 
   >
      <ImageContainer
         :url="artObject.webImage.url"
         :objectId="artObject.objectNumber"
      />
      <div class="mt-2 leading-4 flex justify-between items-center">
         <div class="flex flex-col">
            <p>{{artObject.title}}</p>
            <p class="text-xs">By <span class="text-accent">{{artObject.principalOrFirstMaker}}</span></p>
         </div>
         <a :href="artObject.links.web" target="_blank" rel="noopener noreferrer">
            <FiExternalLink class="text-accent cursor-pointer" />
         </a>
      </div>
   </div>
</template>

<script setup lang="ts">
import ImageContainer from "./ImageContainer.vue"

export interface GridProps {
   artObject: ArtObjectType
   index: number
}

defineProps<GridProps>()
</script>