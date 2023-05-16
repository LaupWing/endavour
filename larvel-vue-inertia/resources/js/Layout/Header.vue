<template>
   <header class="flex border-b border-primary py-4 justify-between sticky top-0 bg-contrast z-50">
      <form 
         class="absolute inset-0 bg-contrast/95 flex items-center p-2"
         v-if="showSearch"
         @submit.prevent="handleSubmit"
      >
         <div className="flex flex-1 items-center relative">
            <input 
               type="text"
               :class="clsx(
                  'flex-1 rounded'
               )"
               v-model="searchInput"
               placeholder="What are you searching for?"
            >
            <span 
               class="absolute px-2 pt-[2px] bottom-0 translate-y-full bg-red-500 left-1 rounded-b text-contrast text-[8px] uppercase"
               v-if="showError"
            >
               Search field cannot be empty!
            </span>
            <button 
               type="submit"
               class="absolute right-4 text-gray-400" 
            >
               <SearchIcon />
            </button>
         </div>
         <button 
            className="px-1"
            @click="showSearch = false"
            type="button"
         >
            <CloseIcon className="text-slate-500" />
         </button>
      </form>
      <RouterLink to="/">
         <h1 class="font-bold font-display text-2xl flex flex-col leading-5">
            <span class="text-accent">Rijks</span>
            <span>Museum</span>
         </h1>
      </RouterLink>
      <div className="flex items-center mr-1 md:mr-4">
         <nav className="mr-8">
            <ul className="flex gap-4">
               <li>Works</li>
               <li>Artists</li>
            </ul>
         </nav>
         <button @click="showSearch = true">
            <SearchIcon />
         </button>
      </div>
   </header>
</template>

<script setup>
import { ref } from "vue"
import clsx from "clsx"
import SearchIcon from "../icons/SearchIcon.vue"
import { RouterLink, useRouter } from "vue-router"
import CloseIcon from "../icons/CloseIcon.vue"

const showSearch = ref<boolean>(false)
const showError = ref<boolean>(false)
const searchInput = ref<string>("")
const router = useRouter()

const handleSubmit = () => {
   showError.value = false
   if(searchInput.value === ""){
      showError.value = true
   } else {
      showSearch.value = false
      router.push({
         name: "Search",
         query: {
            searchTerm: searchInput.value
         }
      })
   }
}
</script>