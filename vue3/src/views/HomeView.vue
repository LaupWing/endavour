<template>
   <main>
      <Hero
         v-if="artWorkStore.artWorks.length"
         :art-object="artWorkStore.artWorks[0]"
      />
      <div class="grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
         <Grid 
            v-for="(item, index) in [...artWorkStore.artWorks].splice(1)"
            :key="item.id"
            :index="index"
            :art-object="item"
         />
      </div>
   </main>
</template>

<script setup lang="ts">
import Grid from "@/components/Grid.vue";
import Hero from "@/components/Hero.vue";
import { useArtWorkStore } from "@/stores/artWorks"

const artWorkStore = useArtWorkStore()

if(!artWorkStore.artWorks.length){
   artWorkStore.fetchAll()
}
</script>
