import React from "react";
import AtomHeading from "../../../Atoms/Heading/AtomHeading";
import AtomImage from "../../../Atoms/Image/AtomImage";

import "./moleculeHomeHero.scss";
import AtomParagraph from "../../../Atoms/Paragraph/AtomParagraph";
import AtomLinks from "../../../Atoms/Link/AtomLinks";

const saladImage = "/Images/food-image/salad.png";
const saladBg = "/Images/food-image/salad-bg.png";

export default function MoleculeHomeHero({ refSaladBg, refSalad, refHeading, refParagraph, refLink }) {
  return (
    <div className="container">
      <div className="header_content">
        <div className="left_hero">
          <AtomHeading refHeading={refHeading} level={1} title="Nostalgia" className="hero_title main_title_font" />
          <AtomParagraph
            refParagraph={refParagraph}
            children={
              "Where taste becomes art! We cook not only dishes, but also create a unique taste.experience. Each of our dishes is made from fresh ingredients, according to author's recipes and with perfect cooking methods."
            }
            className="left_hero_paragraph paragraph_font"
          />
          <AtomLinks
            type={"react_link"}
            refLink={refLink}
            href={"/menu"}
            title={"menu"}
            className="button button_hero"
          />
        </div>
        <div className="right_hero">
          <AtomImage refImage={refSaladBg} src={saladBg} className="salad_bg" />
          <AtomImage refImage={refSalad} src={saladImage} className="salad_image" />
        </div>
      </div>
    </div>
  );
}
