# 🎬 React Movie Explorer

> A professional, immersive movie discovery application built with **React 19** and **The Movie Database (TMDB)**.

![Badge](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Badge](https://img.shields.io/badge/Vite-Fast-yellow?style=for-the-badge&logo=vite)
![Badge](https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge&logo=bootstrap)
![Last Commit](https://img.shields.io/github/last-commit/yourusername/movie-app?style=for-the-badge)

---

## 🌟 Overview

**React Movie Explorer** is a feature-rich single-page application (SPA) that provides users with a seamless interface to discover trending movies, view in-depth details, and manage their authentication state. Built with performance and scalability in mind, it leverages the latest **React Ecosystem** tools including **Vite** for optimized builds and **Context API** for global state management.

Whether you're looking for the week's top hits or analyzing box office numbers, this app delivers data with a modern, responsive user experience.

---

## ✨ Key Features

### 🎥 Discovery & Exploration

- **Trending Dashboard**: Instantly view the top trending movies of the week upon arrival.
- **Dynamic Metadata**: Rich displays of movie posters, backdrops, and release info.
- **Responsive Grid**: A fluid card layout that adapts perfectly to Desktop, Tablet, and Mobile screens.

### 📊 In-Depth Movie Analytics

Clicking on any movie reveals a dedicated details page featuring:

- **Financial Stats**: Real-time Budget and Revenue tracking with formatted currency.
- **Reception**: User popularity scores and vote counts.
- **Production Intel**: List of production companies involved.
- **Genres & Runtime**: Quick tags for movie genres and duration.
- **External Integration**: Direct links to **IMDb** and official movie homepages.

### 🔐 User Experience & Authentication

- **Global Auth System**: robust login and signup context that persists user sessions via `localStorage`.
- **Interactive Feedback**: Toast notifications (via `react-toastify`) for success/error states during interactions.
- **Loading States**: Custom `Loading` spinners ensure a smooth perceived performance during API fetches.
- **Error Handling**: Dedicated `NotFound` page for invalid routes.

---

## 🛠️ Technical Architecture

### Tech Stack

| Component         | Technology      | Description                                                             |
| :---------------- | :-------------- | :---------------------------------------------------------------------- |
| **Core**          | React 19        | The latest version of the library for web and native user interfaces.   |
| **Build Tool**    | Vite            | Next Generation Frontend Tooling for standard-setting speed.            |
| **Styling**       | Bootstrap 5     | Powerful, extensible, and feature-packed frontend toolkit.              |
| **Routing**       | React Router 7  | Standard routing library for React to keep the UI in sync with the URL. |
| **Data Fetching** | Axios           | Promise based HTTP client for the browser and node.js.                  |
| **State**         | Context API     | Built-in React feature to propagate data through the component tree.    |
| **Icons**         | Bootstrap Icons | High quality, open source icon library.                                 |

### Project Structure

```bash
src/
├── 📂 assets/          # Static assets (images, logos)
├── 📂 Components/      # reusable atomic components
│   ├── 📄 Card.jsx     # Movie display card
│   ├── 📄 Navbar.jsx   # Global navigation
│   ├── 📄 Footer.jsx   # Site footer
│   └── 📄 Loading.jsx  # Suspense/Loading operational feedback
├── 📂 Context/         # Global State Management
│   └── 📄 UserContext.jsx # Auth provider (Login/Logout logic)
├── 📂 Pages/           # Route Components
│   ├── 📂 Home         # Dashboard page
│   ├── 📂 MovieDetails # Dynamic [id] page
│   ├── 📂 LogIn        # Authentication forms
│   └── 📂 SignUp       # User registration
├── 📄 App.jsx          # App entry with Routing definitions
└── 📄 main.jsx         # React DOM rendering
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your machine.

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/react-movie-explorer.git
    cd react-movie-explorer
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The app should now be running at `http://localhost:5173`.

### Environment Variables

Currently, the API key is integrated for demonstration. For production, create a `.env` file in the root:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

---

## 📡 API Reference

This project utilizes the **The Movie Database (TMDB) API**.

- **Trending Movies**: `/trending/movie/week`
- **Movie Details**: `/movie/{movie_id}`

---

## � Future Roadmap

- [ ] **Search Functionality**: Implement debounced search for finding specific movies.
- [ ] **Watchlist**: Persist "Favorites" to the user profile.
- [ ] **Cast & Crew**: Add a "Top Billed Cast" section to the details page.
- [ ] **Dark Mode**: Toggleable light/dark theme.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## � License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by [Your Name]
</p>
# ReactMovieApp
