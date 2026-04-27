import React from "react";

import AtomList from "../../Atoms/List/AtomList";
import AtomLi from "../../Atoms/List/Li/AtomLi";
import AtomLinks from "../../Atoms/Link/AtomLinks";

import "./organismNavigation.scss";
import MoleculeNavigation from "../../Molecules/MoleculeNavigation/MoleculeNavigation";

export default function OrganismNavigation() {
  const linksTitle = ["Home", "About us", "Menu", "Contacts"];
  return (
    <MoleculeNavigation
      children={linksTitle?.map((link, linkIndex) => (
        <AtomLi key={linkIndex} className="list_item">
          <AtomLinks
            className="list_link"
            type={"react_link"}
            href={link === "Home" ? "/" : `/${link?.replace(" ", "-").toLowerCase()}`}
            title={link}
          />
        </AtomLi>
      ))}
    />
  );
}
