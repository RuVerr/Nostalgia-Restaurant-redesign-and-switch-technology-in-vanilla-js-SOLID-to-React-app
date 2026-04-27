import React from "react";

import "./moleculeNavigation.scss";
import AtomList from "../../Atoms/List/AtomList";

export default function MoleculeNavigation({ children }) {
  return (
    <>
      <div className="nav_content">
        <AtomList className="list_navigation">{children}</AtomList>
      </div>
      <button className="mobile_nav_button">X</button>
      <div className="mobile_nav_content">{<AtomList className="mobile_list_navigation">{children}</AtomList>}</div>
    </>
  );
}
