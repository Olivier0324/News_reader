import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{article.title}</h2>
        <p className="text-sm text-gray-600 mb-3">
          {article.snippet || "No summary available."}
        </p>
        <p className="text-xs text-gray-500 mb-3">
          {new Date(article.published_at).toLocaleString()}
        </p>
        <Link
          to={`/article/${article.uuid}`}
          className="text-blue-500 hover:underline text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
