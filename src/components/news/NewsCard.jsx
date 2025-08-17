import { Link } from "react-router-dom";

export default function NewsCard({ article, category }) {
  const categoryColors = {
    business: "bg-green-500",
    technology: "bg-blue-500",
    sports: "bg-red-500",
    entertainment: "bg-purple-500",
    health: "bg-yellow-500",
    general: "bg-gray-400",
  };

  // Use article.category if exists, else fall back to selected category or "General"
  const cardCategory =
    (article.category?.toLowerCase()) || (category?.toLowerCase()) || "general";

  const categoryClass = categoryColors[cardCategory] || "bg-gray-400";

  return (
    <div className="relative rounded hover:shadow-lg transition bg-white dark:bg-gray-800  shadow-md overflow-hidden">
      <span
        className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded ${categoryClass}`}
      >
        {cardCategory.charAt(0).toUpperCase() + cardCategory.slice(1)}
      </span>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{article.title}</h2>
        <p className="text-sm text-gray-600 mb-3 dark:text-gray-100">
          {article.snippet || "No summary available."}
        </p>
        <p className="text-xs text-gray-500 mb-3">
          {new Date(article.published_at).toLocaleString()}
        </p>
        <Link
          to={`/article/${article.uuid}`}
          className="text-blue-500 hover:underline text-sm dark:text-gray-100"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
