<template>
   <main>
      <Hero
         v-if="artWorkStore.artWorks.length"
         :art-object="artWorkStore.artWorks[0]"
      />
   </main>
</template>

<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import { useArtWorkStore } from "@/stores/artWorks"

const artWorkStore = useArtWorkStore()

if(!artWorkStore.artWorks.length){
   artWorkStore.fetchAll()
}
</script>
