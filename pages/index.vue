<template>
    <div>
      
        <div class="container px-8 m-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6" >
                      <NuxtLink to="/artist" >
                      <div @click="TheWeeknd" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center overflow-hidden  ">
                         <img src="/assets/imgs/TheWeeknd/main.webp" alt="" class="w-full   ">
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
                         <img src="/assets/imgs/Travis/main.webp" alt="" class="w-full   ">
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
                         <img src="/assets/imgs/LanaDelRey/main.webp" alt="" class="w-full   ">
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
                         <img src="/assets/imgs/metro/main.webp" alt="" class="w-full   ">
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
                         <img src="/assets/imgs/Future/main.webp " alt="" class="w-full  object-top ">
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
                         <img src="/assets/imgs/Billie/main.webp" alt="" class="w-full   ">
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
    ArtistUrl.artistMainimg('/_nuxt/assets/imgs/travis/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/assets/imgs/travis/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/assets/imgs/travis/third.webp')
  }
const TheWeeknd =() =>{
    ArtistUrl.artistName('The+Weeknd')
    ArtistUrl.artistMainimg('/_nuxt/assets/imgs/TheWeeknd/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/assets/imgs/TheWeeknd/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/assets/imgs/TheWeeknd/third.webp')
  }
const LanaDelRey =() =>{
    ArtistUrl.artistName('Lana+Del+Rey')
    ArtistUrl.artistMainimg('/_nuxt/assets/imgs/LanaDelRey/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/assets/imgs/LanaDelRey/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/assets/imgs/LanaDelRey/third.webp')
  }
const Metro =() =>{
    ArtistUrl.artistName('Metro+Boomin')
    ArtistUrl.artistMainimg('/_nuxt/assets/imgs/metro/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/assets/imgs/metro/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/assets/imgs/metro/third.webp')
  }
const Future =() =>{
    ArtistUrl.artistName('Future')
    ArtistUrl.artistMainimg('/_nuxt/assets/imgs/Future/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/assets/imgs/Future/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/assets/imgs/Future/third.webp')
  }
const Billie =() =>{
    ArtistUrl.artistName('Billie+Eilish')
    ArtistUrl.artistMainimg('/_nuxt/assets/imgs/Billie/main.webp')
    ArtistUrl.artistSecimg('/_nuxt/assets/imgs/Billie/sec.webp')
    ArtistUrl.artistThirdimg('/_nuxt/assets/imgs/Billie/third.webp')
  }





</script>
