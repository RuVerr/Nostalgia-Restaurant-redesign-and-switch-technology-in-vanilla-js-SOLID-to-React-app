import React from "react";

export default function AtomList({ children, className = "" }) {
  return <ul className={`list ${className}`}>{children}</ul>;
}
