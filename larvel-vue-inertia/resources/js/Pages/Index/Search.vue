<template>
   <div class="flex flex-col gap-4">
      <h2 class="text-xl">Total {{data.length}} results found on search term: {{searchTerm}}</h2>
      <Link
         v-for="artWork in data"
         :href="route('index.show',artWork.objectNumber)"
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
      </Link>
   </div>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import Highlighter from "vue-highlight-words"

defineProps<{
   data: ApiIndexResponse["artObjects"]
}>()
// @ts-ignore
const {searchTerm} = route().params
</script>