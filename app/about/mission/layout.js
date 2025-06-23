import React from "react";

export default function AboutLayout({children}) {
  return (
    <div>
      <hr></hr>
      <nav className="mt-6 mb-6">Mission | Vission</nav>
      {children}
    </div>
  );
}
