// src/store/news.store.js
import { create } from "zustand";
import { fetchLatestNews } from "../services/newsApi.js";
const useNewsStore = create((set, get) => ({
    articles: [],
    loading: false,
    error: null,
    query: "",
    category: "",
    page: 1,

    setQuery: (q) => set({ query: q }),
    setCategory: (cat) => set({ category: cat }),
    setPage: (page) => set({ page }),

    getNews: async () => {
        set({ loading: true, error: null });
        try {
            const { query, category, page } = get();
            const data = await fetchLatestNews({ query, category, page });
            set({ articles: data.data || [], loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },
}));

export default useNewsStore;
