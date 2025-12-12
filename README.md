# 🎬 React Movie Explorer - Project Guide

This document provides a comprehensive overview of the **React Movie Explorer** application. It explains the architectural decisions, data flow, and key component interactions.

---

## 🏗️ Architecture Overview

The application is a **Single Page Application (SPA)** built with **React 19** and **Vite**. It follows a standard component-based architecture where data flows down from parents to children, with global state managed via **Context API**.

### 🛠️ Core Technologies

- **Routing**: `react-router-dom` (v7) handles client-side navigation without page reloads.
- **State Management**: `UserContext` manages global authentication state (tokens, user info).
- **Data Fetching**: `axios` is used to communicate with the **TMDB API**.
- **UI/UX**: `Bootstrap 5` provides the responsive grid and utility classes, enhanced with custom CSS for a premium feel. `react-toastify` handles notifications.

---

## 🔄 Application Flow

### 1. Entry Point (`main.jsx` & `App.jsx`)

- **`main.jsx`**: Bootstraps the React app and imports global styles (`bootstrap`, `index.css`).
- **`App.jsx`**: Acts as the layout root.
  - Wraps the entire app in `UserContextProvider` to make auth data available everywhere.
  - Sets up the `BrowserRouter` and defines the `Routes`.
  - Initializes the global `ToastContainer` for alerts.

### 2. Authentication Flow (`UserContext.jsx`)

- **State**: Tracks `userToken` and `userData`.
- **Persistence**: Uses `useEffect` to checks `localStorage` on initial load. If a token exists, it automatically logs the user in.
- **Login/Logout**: Helper functions `login()` and `logout()` update both the React state and `localStorage` simultaneously, keeping them in sync.

### 3. Navigation (`Navbar.jsx`)

- **Dynamic Rendering**: Consumes `UserContext`.
  - **Guest**: Shows "Login" and "SignUp" buttons.
  - **User**: Shows a profile dropdown with "Log Out" functionality.
- **UX**: Features a "sticky" effect that changes appearance when the user scrolls (`window.scrollY`).

### 4. Home Dashboard (`Home.jsx`)

- **Data Fetching**: On component mount (`useEffect`), it fetches `trending/movie/week` from TMDB.
- **Rendering**: Maps through the results to render `Card` components.
- **Loading State**: conditionally displays a `<Loading />` spinner while data is being fetched.

### 5. Movie Details (`MovieDetails.jsx`)

- **Routing**: Accessed via dynamic route `/moviedetails/:id`.
- **Data**: Extracts the `id` from the URL using `useParams()`.
- **Visualization**:
  - Fetches detailed metadata (budget, revenue, genres).
  - Displays a large backdrop image with an overlay.
  - Calculates runtime (hours/minutes) and formats currency (M for millions).

---

## 📂 Files Structure Breakdown
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

## 🔐 Key Features Explained

### "Smart" Movie Cards

The `Card.jsx` component maps numerical Genre IDs (e.g., `28`) to readable names (e.g., "Action") using a local lookup object. It also handles the star rating display and "hover" overlay interactions.

### Responsive Design

The app uses Bootstrap's grid system (`col-lg-3 col-md-4 col-sm-6`). This ensures:

- **Desktop**: 4 cards per row.
- **Tablet**: 3 cards per row.
- **Mobile**: 2 cards per row.

### Error Handling

- **404 Page**: A dedicated `NotFound` component handles undefined routes (`path="*"`).
- **API Errors**: While simple now, the structure allows easy addition of `try/catch` blocks in `axios` calls to trigger `toast.error()` messages.
