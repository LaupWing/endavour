<template>
   <div>
      <Link
         href="/"
      >
         Home
      </Link>
      <Link
         :href="route('index.show')"
      >
         About
      </Link>
      Index hello
   </div>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3"

const props = defineProps<{
   data: ApiIndexResponse
}>()

console.log(!!Object.keys(route().params).length)
console.log(Object.keys(route().params))

</script>