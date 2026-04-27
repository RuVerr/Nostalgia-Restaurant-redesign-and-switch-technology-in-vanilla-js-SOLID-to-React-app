import React from "react";

export default function AtomParagraph({ children, refParagraph, className = "" }) {
  return (
    <p ref={refParagraph} className={`paragraph ${className}`}>
      {children}
    </p>
  );
}
