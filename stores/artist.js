import { defineStore } from 'pinia'



export const useArtistURL = defineStore('ArtistURL',{
    state: () => ({
        Artist: null ,
        imgMain: null,
        imgSec: null,
        imgThird: null,
    }),
    actions:{
      artistName(name){
        this.Artist = name
      },
      artistMainimg(newMainimg){
        this.imgMain=newMainimg
      },
      artistSecimg(newSecimg){
        this.imgSec=newSecimg
      },
      artistThirdimg(newThirdimg){
        this.imgThird=newThirdimg
      },
    }
})
