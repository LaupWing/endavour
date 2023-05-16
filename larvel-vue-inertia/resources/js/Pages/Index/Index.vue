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

</script>