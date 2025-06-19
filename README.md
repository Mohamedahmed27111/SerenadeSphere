# 🎵 Music Discovery App

A modern, responsive music discovery platform built with Vue.js and Nuxt.js that allows users to explore artists, albums, and tracks with real-time data from the Last.fm API.

## ✨ Features

### 🎨 Beautiful UI/UX
- **Modern glassmorphism design** with dark theme aesthetics
- **Responsive layout** that works seamlessly across all devices
- **Smooth animations and hover effects** for enhanced user experience
- **Interactive card components** with dynamic backgrounds and overlays

### 🎤 Artist Discovery
- **Featured artists grid** showcasing popular musicians
- **Dynamic artist cards** with background images and avatar displays
- **Real-time statistics** showing monthly listeners and total plays
- **Easy navigation** between different artist sections

### 📀 Album Exploration
- **Top albums display** with cover art and play counts
- **Sorting functionality** (highest/lowest plays)
- **Interactive album cards** with hover effects and play buttons
- **Comprehensive album statistics**

### 🎵 Track Management
- **Top tracks listing** for each artist
- **Play count statistics** and popularity metrics
- **Intuitive track navigation**

### 📊 Real-time Data
- **Last.fm API integration** for up-to-date music information
- **Live statistics** including listener counts and play numbers
- **Dynamic content loading** with proper error handling

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Nuxt.js** - Vue.js meta-framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Last.fm API** - Music database and statistics
- **Pinia** - State management for Vue.js

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/music-discovery-app.git
   cd music-discovery-app
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Last.fm API key:
   ```env
   LASTFM_API_KEY=your_lastfm_api_key_here
   ```

4. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 📁 Project Structure

```
music-discovery-app/
├── components/          # Reusable Vue components
├── pages/              # Application pages
│   ├── index.vue       # Home page with artist grid
│   ├── artist.vue      # Artist profile page
│   ├── albums.vue      # Albums listing page
│   └── tracks.vue      # Tracks listing page
├── stores/             # Pinia state management
│   └── artist.js       # Artist-related state
├── static/             # Static assets
│   └── images/         # Artist images and artwork
├── nuxt.config.js      # Nuxt.js configuration
└── package.json        # Project dependencies
```

## 🎯 Key Components

### Home Page (`index.vue`)
- Hero section with app statistics
- Featured artists grid with interactive cards
- Responsive design for all screen sizes

### Artist Profile (`artist.vue`)
- Artist avatar and information display
- Real-time statistics from Last.fm API
- Navigation buttons to albums and tracks

### Albums Page (`albums.vue`)
- Grid layout for album covers
- Sorting functionality by play count
- Interactive album cards with play buttons

## 🔧 Configuration

The app uses the Last.fm API for music data. You'll need to:

1. Sign up for a [Last.fm API account](https://www.last.fm/api)
2. Get your API key
3. Add it to your environment variables

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile phones (320px - 767px)
- Tablets (768px - 1023px)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎨 Design Features

- **Glassmorphism effects** with backdrop blur
- **Gradient backgrounds** and dynamic color schemes
- **Smooth transitions** and micro-interactions
- **Dark theme** optimized for music browsing
- **Accessibility features** with proper contrast ratios

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
- Follow Vue.js best practices
- Maintain responsive design principles
- Write clean, commented code
- Test across different devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Last.fm](https://www.last.fm/) for providing the music API
- [Vue.js](https://vuejs.org/) community for excellent documentation
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- All the amazing artists featured in the application

## 📞 Support

If you encounter any issues or have questions, please:
- Check the [Issues](https://github.com/yourusername/music-discovery-app/issues) page
- Create a new issue if your problem isn't already listed
- Provide detailed information about the problem

---

**Made with ❤️ and Vue.js**

*Discover new music, explore your favorite artists, and dive deep into the world of music with our modern, responsive platform.*
