<template>
    <div>
      
        <div class="container px-8 m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6" >
                      <NuxtLink to="/artist" >
                      <div @click="TheWeeknd" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center overflow-hidden  ">
                         <img src="/public/TheWeeknd/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">The Weeknd</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>
                  
                  <NuxtLink to="/artist" >
                      <div @click="TravisScott" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center overflow-hidden   ">
                         <img src="/public/Travis/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Travis Scott</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/artist" >
                      <div @click="LanaDelRey" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center overflow-hidden   ">
                         <img src="/public/LanaDelRey/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Lana Del Rey</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>


                  <NuxtLink to="/artist" >
                      <div @click="Metro" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center overflow-hidden  ">
                         <img src="/public/metro/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Metro Boomin </h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>


                  <NuxtLink to="/artist" >
                      <div @click="Future" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center   overflow-hidden ">
                         <img src="/public/Future/main.webp " alt="" class="w-full  object-top ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Future</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>




                  <NuxtLink to="/artist" >
                      <div @click="Billie" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center  overflow-hidden   ">
                         <img src="/public/Billie/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Billie Eilish</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>
                    
        </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue'

import { useArtistURL } from '~/stores/artist';
const ArtistUrl = useArtistURL()


const TravisScott =() =>{
    ArtistUrl.artistName('Travi$+Scott')
    ArtistUrl.artistMainimg('/_nuxt/public/travis/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/public/travis/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/public/travis/third.webp')
  }
const TheWeeknd =() =>{
    ArtistUrl.artistName('The+Weeknd')
    ArtistUrl.artistMainimg('/_nuxt/public/TheWeeknd/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/public/TheWeeknd/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/public/TheWeeknd/third.webp')
  }
const LanaDelRey =() =>{
    ArtistUrl.artistName('Lana+Del+Rey')
    ArtistUrl.artistMainimg('/_nuxt/public/LanaDelRey/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/public/LanaDelRey/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/public/LanaDelRey/third.webp')
  }
const Metro =() =>{
    ArtistUrl.artistName('Metro+Boomin')
    ArtistUrl.artistMainimg('/_nuxt/public/metro/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/public/metro/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/public/metro/third.webp')
  }
const Future =() =>{
    ArtistUrl.artistName('Future')
    ArtistUrl.artistMainimg('/_nuxt/public/Future/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/public/Future/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/public/Future/third.webp')
  }
const Billie =() =>{
    ArtistUrl.artistName('Billie+Eilish')
    ArtistUrl.artistMainimg('/_nuxt/public/Billie/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/public/Billie/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/public/Billie/third.webp')
  }





</script>
