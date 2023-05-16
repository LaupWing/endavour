<template>
   <main class="flex bg-contrast min-h-screen fixed inset-0 overflow-y-auto w-screen flex-col">
      <div class="px-4 md:px-14 flex-col flex flex-1">
         <Header />
         <section class="py-10 flex-1">
            <slot />
         </section>
      </div>
      <Footer/>
   </main>
</template>

<script setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
</script>