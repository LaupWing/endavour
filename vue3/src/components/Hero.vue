<template>
   <div class="grid grid-cols-1 md:grid-cols-2 relative">
      <div class="transform bottom-2 bg-contrast/60 backdrop-blur p-4 rounded absolute md:relative md:bg-transparent md:backdrop-blur-0 translate-x-[10%] my-auto flex flex-col items-start z-50">
         <h2 class="text-2xl md:text-5xl lg:text-7xl font-display flex flex-col items-start gap-2">
            <span class="border-t-2 border-primary">
               {{[...titleSplitted].splice(0, lowerAmount).join(" ")}}
            </span>
            <span class="transform translate-x-[5%] border-y-2 border-primary">
               {{[...titleSplitted].splice(lowerAmount, higherAmount).join(" ")}}
            </span>
            <span class="border-b-2 border-primary">
               {{[...titleSplitted].splice(lowerAmount + higherAmount).join(" ")}}
            </span>
         </h2>
         <p class="mt-6">By <span class="text-accent font-bold">{{artObject.principalOrFirstMaker}}</span></p>
         <p class="text-accent italic">
            <a :href="artObject.links.web" target="_blank" class="flex gap-2 items-center">
               Link to rijksmuseum <FiExternalLink />
            </a>
         </p>
      </div>
      <div class="aspect-square">
         <ImageContainer
            :url="artObject.webImage.url"
            :objectId="artObject.objectNumber"
            :disableLink="!!route.params.id"
         />
      </div>
   </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import ImageContainer from "./ImageContainer.vue"

export interface HeroProps {
   artObject: ArtObjectType
}

const props = defineProps<HeroProps>()
const titleSplitted = props.artObject.title.split(" ")
const lowerAmount =  Math.floor(titleSplitted.length / 3) 
const higherAmount =  Math.ceil(titleSplitted.length / 3)
const route = useRoute()
</script>