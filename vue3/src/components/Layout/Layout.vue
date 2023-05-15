<template>
   <main class="flex bg-contrast min-h-screen fixed inset-0 overflow-y-auto w-screen flex-col">
      <div class="px-4 md:px-14">
         <Header />
         <section class="py-10">
            <slot />
         </section>
      </div>
   </main>
</template>

<script setup lang="ts">
import Header from "./Header.vue"
</script>