# 📰 News Reader App

A modern **React + Vite + TailwindCSS** application that fetches and
displays the  news articles using the [TheNews
API](https://api.thenewsapi.com/v1/news/all).\
Users can browse news by categories, toggle between **dark/light mode**,
and view **full article details**.

------------------------------------------------------------------------

## 🚀 Features

-   Fetch  news articles from TheNews API
-   Category filter (All, Technology, Business, Sports, Health, etc.)
-   Persistent **dark/light theme toggle**
-   View full article details on a separate page
-   Responsive design with TailwindCSS v4.1
-   State management using Zustand

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **React 18**
-   **Vite**
-   **Tailwind CSS v4.1**
-   **Zustand** (state management)
-   **React Router DOM** (routing)
-   **TheNews API**

------------------------------------------------------------------------

## 📦 Installation

1.  Clone the repository: \`\`\`bash git clone
    https://github.com/Olivier0324/News_reader cd News-reader
    \`\`\`

2.  Install dependencies: \`\`\`bash npm install \`\`\`

3.  Create a **.env** file in the root directory and add your API key:
    \`\`\`env VITE_NEWS_API_KEY=your_api_key_here
    VITE_NEWS_API_BASE_URL=https://api.thenewsapi.com/v1/news/all \`\`\`

4.  Start the development server: \`\`\`bash npm run dev \`\`\`

------------------------------------------------------------------------

## 📖 Usage

-   Open the app in your browser at <http://localhost:5173>.
-   By default, all latest news will be displayed.
-   Use the **category filter** to view specific topics (e.g.,
    Technology, Sports).
-   Click **Read More →** to open the full article page.
-   Use the **theme toggle** (🌞/🌙) to switch between light and dark
    modes.



