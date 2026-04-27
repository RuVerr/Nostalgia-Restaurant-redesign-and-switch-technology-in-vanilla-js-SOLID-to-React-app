import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MoleculeNavigation from "../../Components/AtomicUI/Molecules/MoleculeNavigation/MoleculeNavigation";
import TemplateNavigation from "../../Components/AtomicUI/Template/TemplateNavigation/TemplateNavigation";
import MoleculeHomeHero from "../../Components/AtomicUI/Molecules/Hero/HomeHero/MoleculeHomeHero";
import TemplateHomeHero from "../../Components/AtomicUI/Template/TemplteHeros/TemplateHomeHero";

export default function Layout() {
  const location = useLocation();

  const headers = {
    "/": <TemplateHomeHero />
  };

  const currentHeader = headers[location.pathname] || null;

  return (
    <>
      <TemplateNavigation />
      <main>
        {currentHeader}
        <Outlet />
      </main>
      <span>footer</span>
    </>
  );
}
