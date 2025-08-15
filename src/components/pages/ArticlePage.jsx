import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Article Details</h1>
      <p>Article ID: {id}</p>
    </div>
  );
}
