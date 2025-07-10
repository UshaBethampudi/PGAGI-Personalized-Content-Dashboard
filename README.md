# 🧠 Personalized Content Dashboard

An interactive, user-friendly dashboard built using **Next.js 15**, **React**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**, designed to display personalized content feeds like news, movie recommendations, and social media posts. This project was built as part of the **SDE Intern - Frontend Assignment**.

---

## 🌟 Features

### 📰 Personalized Feed
- Fetches real-time news from the **GNews API** based on user-selected categories.
- Displays content as responsive cards with headlines, descriptions, and images.

### 🎬 Movie Recommendations
- Integrates with the **TMDB API** to show personalized movie recommendations.

### 💬 Social Feed (Mock API)
- Mock Twitter-style posts with images, usernames, and hashtags.

### 📌 Favorites
- Allows users to bookmark/favorite articles for quick access.

### 🔍 Search Functionality
- Debounced search bar to filter across all content types.

### 🌙 Dark Mode
- Toggle between light and dark themes. Preference is saved in localStorage.

### 🧩 Drag-and-Drop
- Reorder content cards in the personalized feed using Framer Motion.

### 🔄 Infinite Scroll / Pagination
- Automatically loads more content as the user scrolls.

---

## 🛠️ Tech Stack

- **Next.js 15.3.5** (App Router + Turbopack)
- **TypeScript**
- **Redux Toolkit** + Thunks
- **Tailwind CSS**
- **Framer Motion** (for drag & drop and animations)
- **RTK Query / Axios** (for API calls)
- **React Testing Library** (unit tests)
- **LocalStorage** (for preferences and theme)
- **Jest** (testing setup)

---

## 📦 Installation & Running Locally

```bash
git clone https://github.com/your-username/personalized-dashboard.git
cd personalized-dashboard
npm install
npm run dev
Create a .env.local file and add your keys:

const API_KEY = "60af4dcd7c2c56c2221158fa51c6eeff"; 
const BASE_URL = "https://gnews.io/api/v4/top-headlines";
GNEWS_API_KEY=your_gnews_api_key
TMDB_API_KEY=your_tmdb_api_key
🧪 Testing

npm run test
Unit tests for components using @testing-library/react

Integration testing for Redux + API state

E2E testing supported (Cypress/Playwright setup optional)

📁 Folder Structure
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── NewsCard.tsx
├── redux/
│   ├── store.ts
│   ├── hooks.ts
│   └── slices/
│       ├── contentSlice.ts
│       └── tmdbSlice.ts
├── public/
├── styles/
│   └── globals.css
├── utils/
│   └── debounce.ts
└── providers/
    └── DarkModeProvider.tsx

📜 License
MIT License

👩‍💻 Developed by
Usha Sravanthi Bethampudi
Frontend Developer | MERN Stack Enthusiast
