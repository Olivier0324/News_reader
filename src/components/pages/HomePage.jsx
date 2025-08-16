import { useEffect,useState } from "react";
import useNewsStore from '../../store/news.store'
import NewsCard from "../news/NewsCard";
import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";


export default function HomePage() {
  const { articles, loading, error, getNews, setQuery, setCategory } = useNewsStore();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Business", "Technology", "Sports", "Entertainment", "Health"];

  useEffect(() => {
    getNews(); // Initial fetch; All articles
  }, [getNews]);

  const handleSearch = (q) => {
    setQuery(q);
    getNews();
  };

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    const normalized = cat.toLowerCase() === "all" ? "" : cat.toLowerCase();
    setCategory(normalized);
    getNews();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>

      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onSelect={handleCategory} />

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <NewsCard key={article.uuid} article={article} category={selectedCategory} />
        ))}
      </div>
    </div>
  );
}
