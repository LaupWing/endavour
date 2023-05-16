<template>
   <div 
      class="flex gap-2 items-center"
      :class="className"
   >
      <h3 class="font-bold">Colors</h3>
      <div 
         v-for="color in colors"
         :key="color.hex"
         class="w-8 h-8 rounded-full border-2 border-black"
         :style="{
            backgroundColor: color.hex
         }"
      />
   </div>
</template>

<script setup lang="ts">
export interface Props {
   colors: any[],
   className?: string
}

defineProps<Props>()
</script>