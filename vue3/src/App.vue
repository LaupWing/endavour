<template>
   <Layout>
      <RouterView />
   </Layout>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
import Layout from "./components/Layout/Layout.vue"
</script>