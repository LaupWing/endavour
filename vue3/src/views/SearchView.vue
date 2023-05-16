<template>
   <div>
      Search View
   </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"

export interface Props {
   artWorks: ApiIndexResponse["artObjects"]
}
const route = useRoute()
const { searchTerm } = route.query

defineProps<Props>()
</script>