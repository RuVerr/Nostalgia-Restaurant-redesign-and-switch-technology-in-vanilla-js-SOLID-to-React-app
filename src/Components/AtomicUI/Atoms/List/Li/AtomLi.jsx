import React from "react";

export default function AtomLi({ children, className = "" }) {
  return <li className={`${className}`}>{children}</li>;
}
