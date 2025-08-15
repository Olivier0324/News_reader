import { useEffect } from "react";
import useNewsStore from "../../store/news.store";
import NewsCard from "../news/NewsCard";

export default function HomePage() {
  const { articles, loading, error, getNews } = useNewsStore();

  useEffect(() => {
    getNews(); // Fetch news when page loads
  }, [getNews]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <NewsCard key={article.uuid} article={article} />
        ))}
      </div>
    </div>
  );
}
