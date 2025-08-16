import { useState, useEffect } from "react";

export default function CategoryFilter({ categories, onSelect }) {
  const [active, setActive] = useState("All"); // Default active = "All"

  useEffect(() => {
    onSelect("All"); // fetch all articles initially
  }, []); // run once on mount

  const handleClick = (cat) => {
    setActive(cat);
    onSelect(cat);
  };

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-3 py-1 rounded hover:bg-gray-300 
            ${active === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
