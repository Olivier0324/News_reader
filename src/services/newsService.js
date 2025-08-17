const API_KEY = "nMQmeOLdcFAq4cvnqMxKLRGNSgYqkTI4rgJ8iiUC"; // 🔑 Replace with your real key
const BASE_URL = "https://api.thenewsapi.com/v1/news";

// Fetch all news or news by category
export const fetchNews = async (category = "") => {
    try {
        const url = `${BASE_URL}/top?api_token=${API_KEY}&locale=us${category ? `&categories=${category}` : ""
            }`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        return data.data; // API returns { data: [...] }
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};

// Fetch single article by ID
export const fetchArticleById = async (id) => {
    try {
        const url = `${BASE_URL}/one/${id}?api_token=${API_KEY}&locale=us`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching article:", error);
        return null;
    }
};
