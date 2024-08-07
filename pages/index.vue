<template>
    <div>
      
        <div class="container m-auto grid grid-cols-3 gap-6" >
                      <NuxtLink to="/artist" >
                      <div @click="TheWeeknd" class="main-card card rounded  flex items-center justify-start mt-11 h-40 bg-G ">
                      <div class="main-img w-[38%] h-full flex items-center p-4   ">
                         <img src="/assets/imgs/TheWeeknd/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold text-lg">The Weeknd</h1>
                         <p class="text-B-2 font-bold">About</p>
                      </div>
                    </div>
                  </NuxtLink>
                  
                  <NuxtLink to="/artist" >
                      <div @click="TravisScott" class="main-card card rounded  flex items-center justify-start mt-11 h-40 bg-G ">
                      <div class="main-img w-[38%] h-full flex items-center p-4   ">
                         <img src="/assets/imgs/Travis/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold text-lg">Travis Scott</h1>
                         <p class="text-B-2 font-bold">About</p>
                      </div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/artist" >
                      <div @click="LanaDelRey" class="main-card card rounded  flex items-center justify-start mt-11 h-40 bg-G ">
                      <div class="main-img w-[38%] h-full flex items-center p-4   ">
                         <img src="/assets/imgs/LanaDelRey/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold text-lg">LanaDelRey</h1>
                         <p class="text-B-2 font-bold">About</p>
                      </div>
                    </div>
                  </NuxtLink>


                  <NuxtLink to="/artist" >
                      <div @click="Metro" class="main-card card rounded  flex items-center justify-start mt-11 h-40 bg-G ">
                      <div class="main-img w-[38%] h-full flex items-center p-4   ">
                         <img src="/assets/imgs/metro/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold text-lg">Metro Boomin </h1>
                         <p class="text-B-2 font-bold">About</p>
                      </div>
                    </div>
                  </NuxtLink>


                  <NuxtLink to="/artist" >
                      <div @click="Future" class="main-card card rounded  flex items-center justify-start mt-11 h-40 bg-G ">
                      <div class="main-img w-[38%] h-full flex items-center p-4   ">
                         <img src="/assets/imgs/Future/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold text-lg">Future</h1>
                         <p class="text-B-2 font-bold">About</p>
                      </div>
                    </div>
                  </NuxtLink>




                  <NuxtLink to="/artist" >
                      <div @click="Billie" class="main-card card rounded  flex items-center justify-start mt-11 h-40 bg-G ">
                      <div class="main-img w-[38%] h-full flex items-center p-4   ">
                         <img src="/assets/imgs/Billie/main.webp" alt="" class="w-full   ">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold text-lg">Billie Eilish</h1>
                         <p class="text-B-2 font-bold">About</p>
                      </div>
                    </div>
                  </NuxtLink>
                    
        </div>
    </div>
</template>

<script setup>
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
