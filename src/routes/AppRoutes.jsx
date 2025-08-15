import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ArticlePage from "../components/pages/ArticlePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  );
}
