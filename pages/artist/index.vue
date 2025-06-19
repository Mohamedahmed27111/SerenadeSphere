//Artist Profile Page
<template>
  <div class="container mx-auto px-4 py-8">
    <div class="artist-profile">
      <!-- Header Section -->
      <div class="profile-header">
        <div class="avatar-section">
          <div class="avatar-wrapper">
            <img :src="Artist.imgMain" alt="artist" class="artist-avatar" loading="lazy">
          </div>
        </div>
        
        <div class="info-section">
          <a :href="Link" target="_blank" class="artist-name-link">
            <h1 class="artist-name">{{ name }}</h1>
          </a>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">{{ statsL }}</div>
              <div class="stat-label">Monthly Listeners</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ statsP }}</div>
              <div class="stat-label">Total Plays</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions Section -->
      <div class="actions-section">
        <NuxtLink to="/albums/" class="action-button albums-btn">
          <div class="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div class="btn-content">
            <span class="btn-title">Albums</span>
            <span class="btn-subtitle">Explore discography</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/tracks/" class="action-button tracks-btn">
          <div class="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </div>
          <div class="btn-content">
            <span class="btn-title">Top Tracks</span>
            <span class="btn-subtitle">Most popular songs</span>
          </div>
        </NuxtLink>
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
    statsL.value = formatNumber(response.data.artist.stats.listeners)
    statsP.value = formatNumber(response.data.artist.stats.playcount)
    function formatNumber(num) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
      return num.toString();
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
</script>

<style scoped>
.container {
  max-width: 800px;
}

.artist-profile {
  background: #0a0a0a;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.profile-header {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  position: relative;
}

.avatar-section {
  margin-bottom: 24px;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.artist-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #333;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.info-section {
  width: 100%;
}

.artist-name-link {
  text-decoration: none;
}

.artist-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 24px 0;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.artist-name-link:hover .artist-name {
  color: #8b5cf6;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.75rem;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.actions-section {
  padding: 32px 40px;
  display: flex;
  gap: 16px;
  flex-direction: column;
}

.action-button {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.albums-btn {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
}

.tracks-btn {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  color: white;
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.btn-icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.btn-subtitle {
  font-size: 0.85rem;
  opacity: 0.8;
  font-weight: 400;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .profile-header {
    padding: 32px 24px;
  }

  .artist-avatar {
    width: 100px;
    height: 100px;
  }

  .artist-name {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .actions-section {
    padding: 24px;
  }

  .action-button {
    padding: 16px 20px;
  }

  .btn-title {
    font-size: 1rem;
  }

  .btn-subtitle {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .artist-name {
    font-size: 1.75rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>