<template>
    <div>
        <div class="topTracks p-6">
          <h1 class="text-white text-5xl font-bold mb-5">Top Tracks </h1>
          <div class="flex gap-3 mb-5">
            <button @click="ascend()" class="bg-P-2 py-2 px-3 rounded  text-white">ascend</button>

          <button @click="descend()" class="bg-P-2 py-2 px-3 rounded text-white">descend</button>
          
        </div>
          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols- gap-4">
            <!-- V-FOR Album -->
        <div v-for="T in track" :key="T" >
          <div class="card bg-B-2 text-center rounded h-full flex flex-col justify-between items-center px-5 py-7">
            <div class="album-img rounded">
              <img :src="Artist.imgThird" alt="" class="p-1">
            </div>
            <div class="album-body">
              <h2 class="text-G font-bold text-lg">{{ T.name }}</h2>
              <h2 class="text-P-2 font-bold text-sm"> playcount: {{ T.playcount }}</h2>
            </div>
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




const track = ref(null)

axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=${Artist.Artist}&api_key=bf7b6cd9aab2d42882e143f93a094948&format=json`)
    .then(function (response) {
  
      track.value = response.data.toptracks.track
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
    function descend(){
      
        track.value.sort((a,b) => a.playcount - b.playcount)
     }
     function ascend(){
        track.value.sort((a,b) => b.playcount - a.playcount )
     }
</script>
