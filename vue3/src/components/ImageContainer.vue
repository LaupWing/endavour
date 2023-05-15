<template>
   <div 
      className="w-full h-full"
      v-if="disableLink"
   >
      <img 
         className="h-full w-full object-cover" 
         :src="url" 
         alt="Artwork" 
      />
   </div>
   <RouterLink
      v-else
      :to="{
         name: 'Detail',
         params: {
            id: objectId
         }
      }"
   >
      <img 
         class="h-full w-full object-cover" 
         :src="url"
         alt="Artwork" 
      />
      <div class="absolute opacity-0 duration-300 group-hover:opacity-100 inset-0 bg-contrast/40 text-accent flex items-center justify-center">
         <h3 class="text-2xl scale-150 group-hover:scale-100  duration-300 font-display">Read more</h3>
      </div>
   </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
export interface Props {
   url: string
   objectId: string
   disableLink?: boolean
}

defineProps<Props>()
</script>