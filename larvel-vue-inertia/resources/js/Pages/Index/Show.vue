<template>
   <button 
      class="text-accent text-sm uppercase font-bold mb-2 flex items-center"
      @click="back"
   >
      <ArrowLeftIcon class="w-5" />
      Back
   </button>
   <div 
      class="flex flex-1 flex-col items-start"
   >
      <Hero 
         :artObject="data"
      />
      <Colors
         className="mt-4"
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
import Hero from "@/Components/Hero.vue"
import Colors from "@/Components/Colors.vue"
import ArrowLeftIcon from "@/icons/ArrowLeftIcon.vue"

defineProps<{
   data: ArtObjectType
}>()

const back = () => {
   window.history.back()
}
</script>