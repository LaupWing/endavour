<template>
   <main>
   </main>
</template>

<script setup lang="ts">
import { useArtWorkStore } from "@/stores/artWorks"

const artWorkStore = useArtWorkStore()

if(!artWorkStore.artWorks.length){
   artWorkStore.fetchAll()
}
</script>
