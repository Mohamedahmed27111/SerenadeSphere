<template>
  <div class="container mx-auto px-4 py-8">
    <div class="home-page">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Discover Artists</h1>
          <p class="hero-subtitle">Explore the world's most talented musicians and their greatest works</p>
        </div>
        
        <!-- Stats Overview -->
        <div class="stats-overview">
          <div class="stat-item">
            <div class="stat-number">{{ artists.length }}</div>
            <div class="stat-label">Featured Artists</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">Songs Available</div>
          </div>
        </div>
      </div>

      <!-- Artists Grid -->
      <div class="artists-section">
        <div class="section-header">
          <h2 class="section-title">Featured Artists</h2>
          <p class="section-subtitle">Click on any artist to explore their music</p>
        </div>
        
        <div class="artists-grid">
          <NuxtLink 
            v-for="artist in artists" 
            :key="artist.id"
            to="/artist"
            class="artist-card-link"
          >
            <div 
              @click="artist.handler" 
              class="artist-card"
            >
              <!-- Background Image -->
              <div class="card-background">
                <img 
                  :src="artist.mainImage" 
                  :alt="artist.name"
                  class="background-image" 
                  loading="lazy"
                >
                <div class="background-overlay"></div>
              </div>
              
              <!-- Card Content -->
              <div class="card-content">
                <div class="artist-avatar">
                  <img 
                    :src="artist.mainImage" 
                    :alt="artist.displayName"
                    class="avatar-image" 
                    loading="lazy"
                  >
                </div>
                
                <div class="artist-info">
                  <h3 class="artist-name">{{ artist.displayName }}</h3>
                  <p class="artist-label">Artist</p>
                </div>
                
                <div class="card-actions">
                  <div class="play-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </div>
                  <div class="arrow-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M7 17l10-10"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Hover Glow Effect -->
              <div class="card-glow"></div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useArtistURL } from '~/stores/artist'

const ArtistUrl = useArtistURL()

// Artist data with handlers
const artists = ref([
  {
    id: 'weeknd',
    name: 'The+Weeknd',
    displayName: 'The Weeknd',
    mainImage: '/TheWeeknd/main.webp',
    secondaryImage: '/TheWeeknd/sec.webp',
    thirdImage: '/TheWeeknd/third.webp',
    handler: () => handleArtistClick('The+Weeknd', '/TheWeeknd/main.webp', '/TheWeeknd/sec.webp', '/TheWeeknd/third.webp')
  },
  {
    id: 'travis',
    name: 'Travi$+Scott',
    displayName: 'Travis Scott',
    mainImage: '/travis/main.webp',
    secondaryImage: '/travis/sec.webp',
    thirdImage: '/travis/third.webp',
    handler: () => handleArtistClick('Travi$+Scott', '/travis/main.webp', '/travis/sec.webp', '/travis/third.webp')
  },
  {
    id: 'lana',
    name: 'Lana+Del+Rey',
    displayName: 'Lana Del Rey',
    mainImage: '/LanaDelRey/main.webp',
    secondaryImage: '/LanaDelRey/sec.webp',
    thirdImage: '/LanaDelRey/third.webp',
    handler: () => handleArtistClick('Lana+Del+Rey', '/LanaDelRey/main.webp', '/LanaDelRey/sec.webp', '/LanaDelRey/third.webp')
  },
  {
    id: 'metro',
    name: 'Metro+Boomin',
    displayName: 'Metro Boomin',
    mainImage: '/metro/main.webp',
    secondaryImage: '/metro/sec.webp',
    thirdImage: '/metro/third.webp',
    handler: () => handleArtistClick('Metro+Boomin', '/metro/main.webp', '/metro/sec.webp', '/metro/third.webp')
  },
  {
    id: 'future',
    name: 'Future',
    displayName: 'Future',
    mainImage: '/Future/main.webp',
    secondaryImage: '/Future/sec.webp',
    thirdImage: '/Future/third.webp',
    handler: () => handleArtistClick('Future', '/Future/main.webp', '/Future/sec.webp', '/Future/third.webp')
  },
  {
    id: 'billie',
    name: 'Billie+Eilish',
    displayName: 'Billie Eilish',
    mainImage: '/Billie/main.webp',
    secondaryImage: '/Billie/sec.webp',
    thirdImage: '/Billie/third.webp',
    handler: () => handleArtistClick('Billie+Eilish', '/Billie/main.webp', '/Billie/sec.webp', '/Billie/third.webp')
  },
  {
    id: 'sza',
    name: 'SZA',
    displayName: 'SZA',
    mainImage: '/sza/main.webp',
    secondaryImage: '/sza/sec.webp',
    thirdImage: '/sza/third.webp',
    handler: () => handleArtistClick('SZA', '/sza/main.webp', '/sza/sec.webp', '/sza/third.webp')
  },
  {
    id: 'kanye',
    name: 'Kanye+West',
    displayName: 'Kanye West',
    mainImage: '/ye/main.webp',
    secondaryImage: '/ye/sec.webp',
    thirdImage: '/ye/third.webp',
    handler: () => handleArtistClick('Kanye+West', '/ye/main.webp', '/ye/sec.webp', '/ye/third.webp')
  },
  {
    id: 'clairo',
    name: 'Clairo',
    displayName: 'Clairo',
    mainImage: '/Clairo/main.webp',
    secondaryImage: '/Clairo/sec.webp',
    thirdImage: '/Clairo/third.webp',
    handler: () => handleArtistClick('Clairo', '/Clairo/main.webp', '/Clairo/sec.webp', '/Clairo/third.webp')
  }
])

// Centralized handler function
const handleArtistClick = (name, mainImg, secImg, thirdImg) => {
  ArtistUrl.artistName(name)
  ArtistUrl.artistMainimg(mainImg)
  ArtistUrl.artistSecimg(secImg)
  ArtistUrl.artistThirdimg(thirdImg)
}
</script>

<style scoped>
/* Base Styles (Mobile First) */
.container {
  max-width: 1400px;
  padding: 0 1rem;
}

.home-page {
  background: #0a0a0a;
  border-radius: 16px;
  overflow: hidden;
  min-height: 90vh;
}

/* Hero Section - Mobile First */
.hero-section {
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

.hero-content {
  width: 100%;
  max-width: 500px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 1rem 0;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #8b5cf6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #a1a1aa;
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
}

.stats-overview {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  min-width: 100px;
  flex: 1;
  max-width: 140px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.8rem;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

/* Artists Section - Mobile First */
.artists-section {
  padding: 1.5rem;
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1rem;
  color: #a1a1aa;
  margin: 0;
  font-weight: 400;
}

.artists-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.artist-card-link {
  text-decoration: none;
  display: block;
}

.artist-card {
  position: relative;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
}

.artist-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  filter: brightness(0.7) saturate(1.2);
}

.artist-card:hover .background-image {
  transform: scale(1.05);
  filter: brightness(0.5) saturate(1.4);
}

.background-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);
  transition: all 0.3s ease;
}

.artist-card:hover .background-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.artist-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.artist-card:hover .artist-avatar {
  border-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.artist-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.artist-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.artist-card:hover .artist-name {
  transform: translateY(-2px);
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
}

.artist-label {
  font-size: 0.8rem;
  color: #a1a1aa;
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.artist-card:hover .artist-label {
  opacity: 1;
  color: #8b5cf6;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.play-button {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.8;
  transform: scale(0.9);
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.4);
}

.artist-card:hover .play-button {
  opacity: 1;
  transform: scale(1);
}

.arrow-button {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.artist-card:hover .arrow-button {
  opacity: 1;
  transform: scale(1.1);
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #f59e0b);
  border-radius: 18px;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.3s ease;
  filter: blur(6px);
}

.artist-card:hover .card-glow {
  opacity: 0.2;
}

/* Small phones */
@media (max-width: 360px) {
  .container {
    padding: 0 0.5rem;
  }
  
  .hero-section {
    padding: 1.5rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .artists-section {
    padding: 1rem;
  }
  
  .artist-card {
    height: 180px;
  }
  
  .card-content {
    padding: 0.75rem;
  }
  
  .artist-name {
    font-size: 1.1rem;
  }
}

/* Tablets */
@media (min-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-section {
    padding: 2.5rem 2rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .artists-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  .artist-card {
    height: 220px;
  }
  
  .card-content {
    padding: 1.25rem;
  }
  
  .artist-avatar {
    width: 70px;
    height: 70px;
  }
  
  .artist-name {
    font-size: 1.4rem;
  }
  
  .play-button {
    width: 48px;
    height: 48px;
  }
  
  .arrow-button {
    width: 38px;
    height: 38px;
  }
}

/* Small tablets and large phones landscape */
@media (min-width: 640px) {
  .home-page {
    border-radius: 20px;
  }
  
  .hero-section {
    padding: 3rem 2.5rem;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  
  .hero-content {
    flex: 1;
    max-width: none;
  }
  
  .stats-overview {
    justify-content: flex-end;
    gap: 1.5rem;
  }
  
  .stat-item {
    padding: 1.25rem;
    min-width: 120px;
    max-width: none;
    flex: none;
  }
  
  .stat-number {
    font-size: 2.25rem;
  }
  
  .artists-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .artist-card {
    height: 240px;
  }
  
  .artist-name {
    font-size: 1.5rem;
  }
}

/* Medium tablets */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
  
  .hero-section {
    padding: 3.5rem 3rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .artists-section {
    padding: 2.5rem;
  }
  
  .artists-grid {
    gap: 2rem;
  }
  
  .artist-card {
    height: 260px;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .artist-avatar {
    width: 75px;
    height: 75px;
  }
  
  .artist-name {
    font-size: 1.75rem;
  }
  
  .play-button {
    width: 52px;
    height: 52px;
    opacity: 0;
    transform: scale(0.8);
  }
  
  .arrow-button {
    width: 40px;
    height: 40px;
    opacity: 0;
    transform: translateX(15px);
  }
  
  .artist-card:hover .play-button {
    opacity: 1;
    transform: scale(1);
  }
  
  .artist-card:hover .arrow-button {
    opacity: 1;
    transform: translateX(0);
  }
  
  .artist-card:hover {
    transform: translateY(-6px) scale(1.01);
  }
}

/* Large tablets and small laptops */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
  
  .hero-section {
    padding: 4rem 3rem;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 4rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .stats-overview {
    gap: 2rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .artists-section {
    padding: 3rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .artists-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }
  
  .artist-card {
    height: 280px;
  }
  
  .card-content {
    padding: 2rem;
  }
  
  .artist-avatar {
    width: 80px;
    height: 80px;
  }
  
  .artist-name {
    font-size: 2rem;
  }
  
  .play-button {
    width: 56px;
    height: 56px;
  }
  
  .artist-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .container {
    max-width: 1400px;
  }
  
  .home-page {
    border-radius: 24px;
  }
  
  .hero-section {
    padding: 4rem 4rem;
  }
  
  .artists-section {
    padding: 4rem;
  }
  
  .artists-grid {
    gap: 3rem;
  }
  
  .artist-card {
    border-radius: 20px;
  }
  
  .card-glow {
    border-radius: 22px;
  }
}

/* Very large screens */
@media (min-width: 1536px) {
  .hero-section {
    padding: 5rem 4rem;
  }
  
  .artists-section {
    padding: 5rem 4rem;
  }
}

/* Hover effects for touch devices */
@media (hover: none) and (pointer: coarse) {
  .play-button {
    opacity: 1;
    transform: scale(1);
  }
  
  .arrow-button {
    opacity: 1;
    transform: translateX(0);
  }
  
  .artist-card:active {
    transform: scale(0.98);
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .background-image,
  .avatar-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .artist-card,
  .background-image,
  .artist-avatar,
  .artist-name,
  .play-button,
  .arrow-button,
  .card-glow {
    transition: none;
  }
  
  .artist-card:hover {
    transform: none;
  }
}
</style>