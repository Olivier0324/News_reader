import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 
                    bg-blue-700 dark:bg-gray-800 shadow">
      <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
        News Reader
      </Link>
      <ThemeToggle />
    </nav>
  );
}
