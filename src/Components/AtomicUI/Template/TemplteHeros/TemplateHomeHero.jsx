import React from "react";
import MoleculeHomeHero from "../../Molecules/Hero/HomeHero/MoleculeHomeHero";

import "./templateHeros.scss";
import OrgansimHomeHero from "../../Organisms/Hero/HomeHero/OrgansimHomeHero";

export default function TemplateHomeHero() {
  return (
    <header className="header_home">
      <OrgansimHomeHero/>
    </header>
  );
}
