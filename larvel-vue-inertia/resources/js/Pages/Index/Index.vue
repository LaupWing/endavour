<template>
   <div>
      <Hero
         :art-object="data[0]"
      />
   </div>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3"
import Hero from "@/Components/Hero.vue"

defineProps<{
   data: ApiIndexResponse["artObjects"]
}>()
</script>