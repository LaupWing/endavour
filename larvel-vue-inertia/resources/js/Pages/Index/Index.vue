<template>
   <Hero
      :art-object="data[0]"
   />
   <div class="grid grid-cols-2 md:grid-cols-3 gap-10 py-10">
      <Grid 
         v-for="(item, index) in [...data].splice(1)"
         :key="item.id"
         :index="index"
         :art-object="item"
      />
   </div>
</template>

<script setup lang="ts">
import Hero from "@/Components/Hero.vue"
import Grid from "@/Components/Grid.vue"

defineProps<{
   data: ApiIndexResponse["artObjects"]
}>()
</script>