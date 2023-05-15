<template>
   <footer class="w-full border-t border-primary grid grid-cols-1 md:grid-cols-5 mt-auto">
      <div class="col-span-2 p-4 px-10 md:border-r border-primary flex flex-col">
         <p class="md:text-2xl text-lg uppercase max-w-[80%] md:max-w-[60%]">Signup to our news letter!</p>
         <p class="text-sm mt-2 ml-auto text-primary/40 flex items-center">
            ENTER YOUR EMAIL
            <ArrowRightIcon class="ml-1 text-accent" size={22} />
         </p>
      </div>
      <div class="col-span-1 grid grid-cols-2 py-4 md:py-0 text-sm border-t md:border-t-0 md:border-r border-primary">
         <ul class="flex flex-col items-center justify-center">
            <div>
               <li>About</li>
               <li>Blogs</li>
               <li>Videos</li>
               <li>Press</li>
            </div>
         </ul>
         <ul class="flex flex-col items-center justify-center">
            <div>
               <li>Visit</li>
               <li>Events</li>
               <li>Exhibitions</li>
               <li>Art</li>
            </div>
         </ul>
      </div>
   </footer>
</template>

<script setup lang="ts">
import ArrowRightIcon from "../icons/ArrowRightIcon.vue"
import FacebookIcon from "../icons/FacebookIcon.vue"
import InstagramIcon from "../icons/InstagramIcon.vue"
import PinterestIcon from "../icons/PinterestIcon.vue"
import TwitterIcon from "../icons/TwitterIcon.vue"
import YoutubeIcon from "../icons/YoutubeIcon.vue"

const socials = {
   facebook: FacebookIcon,
   instagram: InstagramIcon,
   twitter: TwitterIcon,
   youtube: YoutubeIcon,
   pinterest: PinterestIcon
}
</script>