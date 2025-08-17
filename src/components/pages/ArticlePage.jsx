import { useParams } from "react-router-dom";
import useNewsStore from "../../store/news.store";

export default function ArticlePage() {
  const { id } = useParams();
  const { articles } = useNewsStore();

  // Find the article by uuid
  const article = articles.find((a) => a.uuid === id);

  if (!article) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Article not found 😢</h1>
        <p>Please go back and select an article again.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={article.image_url}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        By {article.author || "Unknown"} | {article.source} |{" "}
        {new Date(article.published_at).toLocaleString()}
      </p>
      <p className="text-lg leading-relaxed">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-4 block"
      >
        Read Original Source
      </a>
    </div>
  );
}
