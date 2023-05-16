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
   <Link
      v-else
      class="w-full h-full relative overflow-hidden group"
      :href="route('index.show', objectId)"
   >
      <img 
         class="h-full w-full object-cover" 
         :src="url"
         alt="Artwork" 
      />
      <div class="absolute opacity-0 duration-300 group-hover:opacity-100 inset-0 bg-contrast/40 text-accent flex items-center justify-center">
         <h3 class="text-2xl scale-150 group-hover:scale-100  duration-300 font-display">Read more</h3>
      </div>
   </Link>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3"
export interface Props {
   url: string
   objectId: string
   disableLink?: boolean
}

defineProps<Props>()
</script>