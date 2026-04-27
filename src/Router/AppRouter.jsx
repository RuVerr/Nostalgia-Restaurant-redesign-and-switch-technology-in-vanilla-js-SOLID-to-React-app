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
          <Route path="/about-us" element={<span>About us</span>} />
          <Route path="/menu" element={<span>Menu</span>} />
          <Route path="/contacts" element={<span>Contacts</span>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
