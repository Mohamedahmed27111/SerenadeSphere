<template>
    <div class="container m-auto">
      <div class="card bg-G rounded">
        <div class="artist-hero flex items-center mb-5">
          <div class="artist-img w-2/4 flex items-center">
            <img :src="Artist.imgMain" alt="" class="p-5 shadow rounded-md ">
          </div>
          <div class="artist-body p-10">
            <a :href="Link" target="_blank">
              <h1 class="text-white text-5xl font-bold hover:text-B-2 duration-200">{{ name }} </h1>
            </a>
            <ul class="text-xl font-semibold my-5 flex gap-6 justify-between items-center uppercase text-P-2">
              <li>
                <h2>listeners: {{statsL}}</h2>
              </li>
              <li>
                <h2>playcount: {{ statsP }}</h2>
              </li>
            </ul>

           <div class="flex flex-col mt-20 gap-24">
            <NuxtLink to="/albums/" ><h1 class="artist"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>Top Albums</h1>  </NuxtLink>
           <NuxtLink to="/tracks/">  <h1 class="artist"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>Top Tracks</h1>  </NuxtLink>
          </div>
  
          </div>
  
        </div>
    
  
    
        
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios';
  import { useArtistURL } from '~/stores/artist';

  const Artist = useArtistURL()

 
 
  
  
  const artist = ref(null)
  const name = ref(null)
  const Link = ref(null)
  const statsL = ref(null)
  const statsP = ref(null)
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${Artist.Artist}&api_key=bf7b6cd9aab2d42882e143f93a094948&format=json`
 
  
  
  axios.get(url)
    .then(function (response) {
      artist.value = response.data.artist
      name.value = response.data.artist.name
      Link.value = response.data.artist.url
      statsL.value = response.data.artist.stats.listeners
      statsP.value = response.data.artist.stats.playcount
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
//   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
 
  
 
  
  
  
  </script>
  
  <style scoped></style>