<template>
  <div class="container mx-auto px-4 py-8">
    <div class="tracks-page">
      <!-- Header Section -->
      <div class="page-header">
        <div class="header-content">
          <h1 class="page-title">Top Tracks</h1>
          <p class="page-subtitle">Most popular songs and fan favorites</p>
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

      <!-- Tracks List -->
      <div class="tracks-container">
        <div class="tracks-list">
          <div v-for="(T, index) in track" :key="T.name" class="track-item">
            <div class="track-number">
              <span class="number">{{ String(index + 1).padStart(2, '0') }}</span>
              <div class="play-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </div>
            </div>
            
            <div class="track-artwork">
              <img :src="Artist.imgThird" :alt="T.name" class="artwork-image" loading="lazy">
              <div class="artwork-overlay">
                <div class="play-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="track-info">
              <h3 class="track-title">{{ T.name }}</h3>
              <div class="track-stats">
                <div class="stat-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                  <span>{{ formatNumber(T.playcount) }}</span>
                </div>
              </div>
            </div>
            
            <div class="track-actions">
              <button class="action-btn favorite-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <button class="action-btn more-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="12" cy="5" r="1"/>
                  <circle cx="12" cy="19" r="1"/>
                </svg>
              </button>
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
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function descend() {
  track.value.sort((a, b) => a.playcount - b.playcount)
}

function ascend() {
  track.value.sort((a, b) => b.playcount - a.playcount)
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
  max-width: 1000px;
}

.tracks-page {
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
  border-color: #f59e0b;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.2);
}

.descend-btn:hover {
  border-color: #ef4444;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.2);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tracks-container {
  padding: 40px;
}

.tracks-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.track-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.track-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateX(4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.track-item:hover .number {
  opacity: 0;
}

.track-item:hover .play-indicator {
  opacity: 1;
}

.track-number {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  position: relative;
}

.number {
  font-size: 1rem;
  font-weight: 600;
  color: #a1a1aa;
  transition: opacity 0.3s ease;
}

.play-indicator {
  position: absolute;
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.track-artwork {
  width: 56px;
  height: 56px;
  margin-right: 16px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.artwork-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.artwork-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.track-item:hover .artwork-overlay {
  opacity: 1;
}

.play-button {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.track-item:hover .play-button {
  transform: scale(1);
}

.track-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.track-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-stats {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 8px;
  padding: 4px 8px;
  color: #f59e0b;
  font-size: 0.8rem;
  font-weight: 500;
}

.track-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.track-item:hover .track-actions {
  opacity: 1;
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: #a1a1aa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: scale(1.05);
}

.favorite-btn:hover {
  color: #ef4444;
  border-color: #ef4444;
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

  .tracks-container {
    padding: 24px;
  }

  .track-item {
    padding: 12px 16px;
  }

  .track-artwork {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }

  .track-title {
    font-size: 1rem;
  }

  .track-actions {
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .page-title {
    font-size: 2rem;
  }

  .sort-controls {
    flex-direction: column;
  }

  .sort-button {
    justify-content: center;
  }

  .track-number {
    width: 32px;
    margin-right: 12px;
  }

  .number {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 24px 20px;
  }

  .tracks-container {
    padding: 20px;
  }

  .track-item {
    padding: 10px 12px;
  }

  .track-artwork {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .track-actions {
    gap: 4px;
  }

  .action-btn {
    width: 32px;
    height: 32px;
  }
}
</style>