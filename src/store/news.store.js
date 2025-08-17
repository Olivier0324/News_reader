import { create } from "zustand";
import { fetchLatestNews } from "../services/newsApi";

const useNewsStore = create((set, get) => ({
  articles: [],
  loading: false,
  error: null,
  query: "",
  category: "",
  page: 1,

  // Action: Set query
  setQuery: (q) => set({ query: q }),

  // Action: Set category
  setCategory: (cat) => set({ category: cat }),

  // Action: Fetch news from API
  getNews: async () => {
    set({ loading: true, error: null });
    try {
      const { query, category, page } = get();
      const data = await fetchLatestNews({ query, category, page });
      set({ articles: data.data || [], loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }
}));

export default useNewsStore;
