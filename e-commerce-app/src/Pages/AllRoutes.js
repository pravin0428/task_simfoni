import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailsPage from "./ProductDetailsPage";
import SearchPage from "./SearchPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productlist/:id" element={<ProductDetailsPage />} />
      <Route path="/searchpage" element={<SearchPage />} />
    </Routes>
  );
}

export default AllRoutes;
