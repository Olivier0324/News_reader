// src/services/newsApi.js
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;

// Fetch latest news
export async function fetchLatestNews({ query = "", category = "", page = 1 }) {
    try {
        const url = new URL(`${BASE_URL}/news/all`);
        url.searchParams.append("api_token", API_KEY);
        url.searchParams.append("language", "en");
        url.searchParams.append("page", page);
        if (query) url.searchParams.append("search", query);
        if (category) url.searchParams.append("categories", category);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching news:", err);
        throw err;
    }
}
