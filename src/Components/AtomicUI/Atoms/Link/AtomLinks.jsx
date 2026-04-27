import React from "react";
import { Link } from "react-router-dom";

export default function AtomLinks({ type, title, dataText = "", href, refLink, className = "" }) {
  switch (type) {
    case "react_link":
      return (
        <Link to={href} ref={refLink} data-text={dataText} className={`react_dom_link ${className}`}>
          {title}
        </Link>
      );
      break;

    case "blank":
      return (
        <a href={href} target="blank_" className={`react_dom_link ${className}`}>
          {title}
        </a>
      );
      break;

    default:
      return (
        <a href={href} className={`default_link ${className}`}>
          {title}
        </a>
      );
      break;
  }
}
