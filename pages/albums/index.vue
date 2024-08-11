<template>
    <div>
        <div class="topAlbums p-6">
          <h1 class="text-white text-5xl font-bold mb-5">Top Albums </h1>
          <div class="flex gap-3 mb-5">
            <button @click="ascend()" class="bg-P-2 py-2 px-3 rounded  text-white">Ascend</button>

          <button @click="descend()" class="bg-P-2 py-2 px-3 rounded text-white">Descend</button>
          
        </div>
          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <!-- V-FOR Album -->
        <div v-for="A in album" :key="A" >
          <div class="card bg-B-2 text-center rounded h-full flex flex-col justify-between items-center px-5 py-7">
            <div class="album-img rounded">
              <img :src="Artist.imgSec" alt="" class="p-1" loading="lazy">
            </div>
            <div class="album-body">
              <h2 class="text-G font-bold text-sm">{{ A.name }}</h2>
              <h2 class="text-P-2 font-bold text-sm"> playcount: {{formatNumber(A.playcount) }}</h2>
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



const album = ref(null)

 axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${Artist.Artist}&api_key=bf7b6cd9aab2d42882e143f93a094948&format=json`)
    .then(function (response) {
  
      album.value = response.data.topalbums.album
  
    
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
    function descend(){
      
      album.value.sort((a,b) => a.playcount - b.playcount)
     }
     function ascend(){
      album.value.sort((a,b) => b.playcount - a.playcount )
     }



     function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
</script>

