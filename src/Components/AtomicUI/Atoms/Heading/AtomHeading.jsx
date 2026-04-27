import React, { useEffect } from "react";

import "./AtomHeading.scss";

export default function AtomHeading({ level = 1, title = "Heading", refHeading, className = "" }) {
  const safeLevel = Math.min(6, Math.max(1, level));
  let Tag = `h${safeLevel}`;

  return (
    <Tag ref={refHeading} className={`heading ${className}`}>
      {title}
    </Tag>
  );
}
