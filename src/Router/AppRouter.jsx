import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemplateHome from "../Components/AtomicUI/Template/TemplateHome";
import Layout from "./Layout/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TemplateHome />} />
          <Route path="/2" element={<span>w</span>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
