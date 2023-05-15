<template>
   <button 
      className="text-accent text-sm uppercase font-bold mb-2 flex items-center"
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
      class="flex flex-1 flex-col"
      v-if="data && !loaded"
   >
      <Hero 
         :artObject="data"
      />
      <Colors
         :colors="data.colors"
      />
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

const init = async () => {
   data.value = await artWorkStore.fetchSingle()
}
if(!loaded.value){
   init()
}

</script>
