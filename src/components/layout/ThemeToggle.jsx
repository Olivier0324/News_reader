import { useEffect, useState } from "react";

export default function ThemeToggle() {
<<<<<<< HEAD
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check saved theme in localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") document.documentElement.classList.add("dark");
    } else {
      // Auto-detect system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
=======
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>>>>>>> 9f49cdb1338b9e9a4fb174d0d69c7a53a4f34e9d
      className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 
                 text-gray-800 dark:text-gray-200 transition"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
