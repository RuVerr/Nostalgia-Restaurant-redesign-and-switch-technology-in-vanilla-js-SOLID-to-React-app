import React from "react";

export default function AtomImage({ src = "", altInfo = "", refImage, className = "" }) {
  return <img ref={refImage} src={src} alt={altInfo} className={className} />;
}
