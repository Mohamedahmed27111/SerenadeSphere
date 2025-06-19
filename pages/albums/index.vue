<template>
  <div class="container mx-auto px-4 py-8">
    <div class="albums-page">
      <!-- Header Section -->
      <div class="page-header">
        <div class="header-content">
          <h1 class="page-title">Top Albums</h1>
          <p class="page-subtitle">Discover the most popular releases</p>
        </div>
        
        <!-- Sort Controls -->
        <div class="sort-controls">
          <button @click="ascend()" class="sort-button ascend-btn">
            <div class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 17h6l-3-3z"/>
                <path d="M14 5v12"/>
                <path d="M18 9l-4-4-4 4"/>
              </svg>
            </div>
            <span>Highest Plays</span>
          </button>
          
          <button @click="descend()" class="sort-button descend-btn">
            <div class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 7h6l-3 3z"/>
                <path d="M14 17V5"/>
                <path d="M18 13l-4 4-4-4"/>
              </svg>
            </div>
            <span>Lowest Plays</span>
          </button>
        </div>
      </div>

      <!-- Albums Grid -->
      <div class="albums-grid">
        <div v-for="A in album" :key="A.name" class="album-card">
          <div class="card-inner">
            <div class="album-image-wrapper">
              <img :src="Artist.imgSec" :alt="A.name" class="album-image" loading="lazy">
              <div class="image-overlay">
                <div class="play-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="album-info">
              <h3 class="album-title">{{ A.name }}</h3>
              <div class="album-stats">
                <div class="stat-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                  <span>{{ formatNumber(A.playcount) }} plays</span>
                </div>
              </div>
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
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function descend() {
  album.value.sort((a, b) => a.playcount - b.playcount)
}

function ascend() {
  album.value.sort((a, b) => b.playcount - a.playcount)
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

<style scoped>
.container {
  max-width: 1200px;
}

.albums-page {
  background: #0a0a0a;
  border-radius: 24px;
  overflow: hidden;
  min-height: 80vh;
}

.page-header {
  padding: 40px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #a1a1aa;
  margin: 0;
  font-weight: 400;
}

.sort-controls {
  display: flex;
  gap: 12px;
}

.sort-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sort-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.ascend-btn:hover {
  border-color: #6366f1;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
}

.descend-btn:hover {
  border-color: #f59e0b;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.2);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.albums-grid {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.album-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.album-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.album-image-wrapper {
  position: relative;
  padding: 20px 20px 0 20px;
}

.album-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 16px;
  transition: all 0.4s ease;
}

.image-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.album-card:hover .image-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transform: scale(0.8);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.4);
}

.album-card:hover .play-button {
  transform: scale(1);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.6);
}

.album-info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.album-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.album-stats {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #8b5cf6;
  font-size: 0.9rem;
  font-weight: 500;
}

.stat-item svg {
  opacity: 0.8;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .page-header {
    padding: 32px 24px;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .sort-controls {
    justify-content: center;
  }

  .albums-grid {
    padding: 24px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .page-title {
    font-size: 2rem;
  }

  .sort-controls {
    flex-direction: column;
  }

  .albums-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .sort-button {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .albums-grid {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .page-header {
    padding: 24px 20px;
  }
}
</style>