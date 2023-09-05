import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import ImageDetailsPage from "./pages/ImageDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<ImageDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
