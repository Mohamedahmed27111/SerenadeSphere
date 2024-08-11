<template>
    <div>
        <div class="container px-8 m-auto grid xl:grid-cols-3 md:grid-cols-2 gap-6" >
                      <NuxtLink to="/artist" >
                      <div @click="TheWeeknd" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center overflow-hidden  ">
                         <img src="/TheWeeknd/main.webp" alt="" class="w-full" loading="lazy">
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
                         <img src="/travis/main.webp" alt="" class="w-full" loading="lazy">
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
                         <img src="/LanaDelRey/main.webp" alt="" class="w-full" loading="lazy">
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
                         <img src="/metro/main.webp" alt="" class="w-full" loading="lazy">
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
                         <img src="/Future/main.webp " alt="" class="w-full" loading="lazy">
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
                         <img src="/Billie/main.webp" alt="" class="w-full" loading="lazy">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Billie Eilish</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>
                    
                  <NuxtLink to="/artist" >
                      <div @click="sza" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center  overflow-hidden   ">
                         <img src="/sza/main.webp" alt="" class="w-full" loading="lazy">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">SZA</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/artist" >
                      <div @click="ye" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center  overflow-hidden   ">
                         <img src="/ye/main.webp" alt="" class="w-full" loading="lazy">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Kanye West</h1>
                         <p class="text-B-2 font-bold opacity-80">About</p>
                      </div>
                    </div>
                  </NuxtLink>



                  <NuxtLink to="/artist" >
                      <div @click="clairo" class="main-card card rounded  flex items-center justify-start sm:mt-11 mt-4 h-40 bg-G ">
                      <div class="main-img w-3/6 h-full flex items-center  overflow-hidden   ">
                         <img src="/Clairo/main.webp" alt="" class="w-full " loading="lazy">
                      </div>
                      <div class="main-body ml-4">
                         <h1 class="text-P-2 font-extrabold sm:text-2xl text-xl">Clairo</h1>
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
    ArtistUrl.artistMainimg('/travis/main.webp')
    ArtistUrl.artistSecimg('/travis/sec.webp')
    ArtistUrl.artistThirdimg('/travis/third.webp')
  }
const TheWeeknd =() =>{
    ArtistUrl.artistName('The+Weeknd')
    ArtistUrl.artistMainimg('/TheWeeknd/main.webp')
    ArtistUrl.artistSecimg('/TheWeeknd/sec.webp')
    ArtistUrl.artistThirdimg('/TheWeeknd/third.webp')
  }
const LanaDelRey =() =>{
    ArtistUrl.artistName('Lana+Del+Rey')
    ArtistUrl.artistMainimg('/LanaDelRey/main.webp')
    ArtistUrl.artistSecimg('/LanaDelRey/sec.webp')
    ArtistUrl.artistThirdimg('/LanaDelRey/third.webp')
  }
const Metro =() =>{
    ArtistUrl.artistName('Metro+Boomin')
    ArtistUrl.artistMainimg('/metro/main.webp')
    ArtistUrl.artistSecimg('/metro/sec.webp')
    ArtistUrl.artistThirdimg('/metro/third.webp')
  }
const Future =() =>{
    ArtistUrl.artistName('Future')
    ArtistUrl.artistMainimg('/Future/main.webp')
    ArtistUrl.artistSecimg('/Future/sec.webp')
    ArtistUrl.artistThirdimg('/Future/third.webp')
  }
const Billie =() =>{
    ArtistUrl.artistName('Billie+Eilish')
    ArtistUrl.artistMainimg('/Billie/main.webp')
    ArtistUrl.artistSecimg('/Billie/sec.webp')
    ArtistUrl.artistThirdimg('/Billie/third.webp')
  }
const sza =() =>{
    ArtistUrl.artistName('SZA')
    ArtistUrl.artistMainimg('/sza/main.webp')
    ArtistUrl.artistSecimg('/sza/sec.webp')
    ArtistUrl.artistThirdimg('/sza/third.webp')
  }
const ye =() =>{
    ArtistUrl.artistName('Kanye+West')
    ArtistUrl.artistMainimg('/ye/main.webp')
    ArtistUrl.artistSecimg('/ye/sec.webp')
    ArtistUrl.artistThirdimg('/ye/third.webp')
  }
const clairo =() =>{
    ArtistUrl.artistName('Clairo')
    ArtistUrl.artistMainimg('/Clairo/main.webp')
    ArtistUrl.artistSecimg('/Clairo/sec.webp')
    ArtistUrl.artistThirdimg('/Clairo/third.webp')
  }





</script>
